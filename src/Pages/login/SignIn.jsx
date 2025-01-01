import img1 from '../../assets/others/authentication1.png';
import imgbg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import { data, Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const SignIn = () => {
    const {creatuserEmailPAss,googleLogin,updateinf,}=useContext(AuthContext)
    const naviagete=useNavigate()
    const captaRef=useRef(null)
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
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const photo=form.photo.value
      
        const formData={email,password,photo,name}
        console.log(formData)
       
        console.log(photo.file)
        creatuserEmailPAss(email,password)
        .then((userCredential) => {
           
            const user = userCredential.user;
            updateinf(name,photo)
            .then(() => {
                console.log('userPRofile infu Updated')

              }).catch((error) => {
               console.log(error)
              });
        console.log(user)
        naviagete('/')
          })
          .catch((error) => {
            console.log(error.message)
          });

 

    }
    const handlegoogle=()=>{
        googleLogin()
        .then((result) => {
           console.log(result)
           naviagete('/')
           toast.success('Login Sucess')
          }).catch((error) => {
    console.log(err)
    toast.error('Login Faild')
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
                <h2 className='text-2xl font-semibold'>Plese Sign Up</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
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
        
                <div className='items-center p-5'>
                <p className='text-[#D1A054] p-5'>Already here?<Link  to='/login' className='text-[#D1A054]'> Login Your Account</Link></p>
                <p  className='text-[#D1A054]  p-5'>Or sign in with</p>
                <button onClick={handlegoogle} className=' btn   border-yellow-300 rounded-full' >    <FaGoogle className='btn-outline' /></button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
