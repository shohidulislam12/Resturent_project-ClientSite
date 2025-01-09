import React from 'react';
import SectionTitle from '../../../Componets/Sectiontitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51QfHf5E6ApwxNNNnQrVnEB493IdIviuN5ohgE7AsVB4CKq91nvJvP9YLfjNh91xzBe4Ih2p9FdwdwkujYAmwjSlw00mNy1TbIF');

const PAyment = () => {
    return (
        <div>
            <SectionTitle subheading={'Please Pay Before Order'} heading={'Payment'}></SectionTitle>
            <div className="payment-form">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
        </div>
    );
};

export default PAyment;