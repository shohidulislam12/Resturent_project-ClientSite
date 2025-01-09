import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiouSecure from "../../../Hooks/useAxiouSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [cart,refetch] = useCart();
  const navigate=useNavigate()
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const axiousSecure = useAxiouSecure();
  const stripe = useStripe();
  const elements = useElements();
  const price = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (price > 0) {
      axiousSecure.post('/creat-payment-intent', { price: price })
        .then(res => {
          setClientSecret(res.data.clientSecret);
          console.log('Client Secret:', res.data.clientSecret);
        })
        .catch(error => console.error('Error fetching client secret:', error));
    }
  }, [axiousSecure, price, cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    const card = elements.getElement(CardElement);
    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("Payment Error:", error);
      setProcessing(false);
      return;
    } else {
      setError('');
      console.log('Payment Method:', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message);
      console.log("Confirm Error:", confirmError);
      setProcessing(false);
    } else {
      setTransactionId(paymentIntent.id);
      console.log('Payment Intent:', paymentIntent);

      const payment = {
        email: user?.email || 'anonymous',
        price: price,
        transactionId: paymentIntent.id,
        date: new Date().toISOString(),
        cardIds: cart.map(item => item._id),
        menuItemIds: cart.map(item => item.menuId),
        status: 'pending',
      };

      axiousSecure.post('/payment', payment)
        .then(res => {
            refetch()
            toast.success('sucessfully payment')
            navigate('/dashbord/paymentHistory')
          console.log('Payment saved:', res.data);
        })
        .catch(error => {
          console.error('Error saving payment:', error);
        });

      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        id="my-card"
        options={{
          iconStyle: "solid",
          style: {
            base: {
              iconColor: "#c4f0ff",
              color: "#3085d6",
              fontSize: "16px",
            },
            invalid: {
              iconColor: "#FFC7EE",
              color: "#FFC7EE",
            },
          },
        }}
      />
      <button disabled={!stripe || !clientSecret || processing} className="btn btn-primary">
        {processing ? 'Processing...' : 'Pay'}
      </button>
      <p className="text-xl text-red-500">{error}</p>
      <p className="text-2xl text-green-500">{transactionId && `Transaction ID: ${transactionId}`}</p>
    </form>
  );
};

export default CheckoutForm;
