import img1 from '../../assets/others/authentication1.png';
import imgbg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import SocialLogin from '../../Componets/social/SocialLogin';
const Login = () => {
    const {user,googleLogin,signInEmailAndPass}=useContext(AuthContext)
    const naviagete=useNavigate()
    const captaRef=useRef(null)
    const location=useLocation()
    const from=location.state?.from?.pathname ||'/';
    const [disAble,setDisabe]=useState(true)
    useEffect(()=>{
 
            loadCaptchaEnginge(6); 
      
    },[])
    const validateCapta=()=>{
           const value=captaRef.current.value
           if (validateCaptcha(value)) {
            setDisabe(false)
            toast.success('Captcha Matched');
        }
   
        else {
            setDisabe(true)
            toast.error('Captcha Does Not Match');
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        const formData={name,password}
        console.log(formData)
        signInEmailAndPass(email,password)
        .then((userCredential) => {
            naviagete(from,{replace:true})
            const user = userCredential.user;
        console.log(user)
          })
          .catch((error) => {
            console.log(error.message)
          });
    }
    
    return (
        <div 
        style={{ backgroundImage: `url(${imgbg})` }}
        className="md:p-20 md:m-20 m-5 p-5 shadow-xl items-center justify-center bg-base-200 flex flex-col md:flex-row min-h-screen">
            <div className="flex-1  ">
                <img className="w-auto" src={img1} alt="Authentication" />
            </div>
            <div className="flex-1">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                     
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <LoadCanvasTemplate />
                        </label>
                        <input ref={captaRef} type="text" name='capcha' placeholder=" type given capta" className="input input-bordered" required />
                        <button onClick={validateCapta} className="btn btn-outline btn-xs">Validate</button>
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={disAble} className="btn btn-primary bg-[#D1A054]">Login </button>
                    </div>
                </form>
                <p className='text-[#D1A054]'>New here?<Link  to='/signup' className='text-[#D1A054]'> Create a New Account</Link></p>
                <p  className='text-[#D1A054]'>Or sign in with</p>
                <div>
                <SocialLogin></SocialLogin>
             
                </div>
            </div>
           
        </div>
    );
};

export default Login;
