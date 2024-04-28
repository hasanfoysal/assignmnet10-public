
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import google from "../../../assets/download (5).png"
import github from "../../../assets/download (4).png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../components/Root/Firebase/firebase.config';
// import Helmet from '../../'

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

// ..
AOS.init();
const Login = () => {
  const {signIn, setUser} = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
   // eslint-disable-next-line no-unused-vars
   const auth = getAuth(app);
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error', error.message);

    })
   }

   const handleGithubSignIn =() =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
      setSuccess('user logged successfully.')
     
    })
    .catch(error =>{
      console.log(error);
      
    })
   }

  // const {signIn, setUser} = useContext(AuthContext);


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
        setRegisterError('');
        setSuccess('');

        signIn(email, password)
        .then(result =>{
          console.log(result.user);
          setSuccess('user logged successfully.')

      
        })
        .catch(error =>{
           console.error(error);
           setRegisterError(error.message);
        })
       

    }
    return (
        <div >
     
                <title>Login</title>
               
        
        <div className="hero min-h-screen bg-base-200" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"data-aos="flip-right" data-aos-duration="2000">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 ">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-600 "data-aos="flip-left" data-aos-duration="2000">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input 
                 type={ showPassword ? 'text' :"password"}
                 placeholder="password" 
                 name='password' 
                 className="input input-bordered"
                  required /><span className="absolute top-14 left-48 lg:left-[280px]" onClick={ () => setShowPassword(!showPassword)}>
                     {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }

                  
                  </span>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              <div className='my-5'>
                <hr />
                {
              registerError && <p className="text-red-700 pl-4 pb-16">{registerError}</p>
            }
            {
              success && <p className="text-green-600 ml-4 mb-16">{success}</p>
            }
               <h1 className='text-center'>Login with social account</h1>
               <div className='flex align-middle justify-center gap-2'>
                <div onClick={handleGoogleSignIn}>
                <img className='w-8 h-8' src={google} alt="" />
                </div>
                <div onClick={handleGithubSignIn}>
                <img className='w-8 h-8' src={github} alt="" />
                </div>
                
               </div>
               <h3 className='text-center '>Do not have an account? <Link className='text-sky-500 font-semibold' to='/register'>Register</Link> </h3>
              </div>
            </form>
            {/* {
              registerError && <p className="text-red-700 pl-4 pb-16">{registerError}</p>
            }
            {
              success && <p className="text-green-600 ml-4 pb-16">{success}</p>
            } */}
          </div>
        </div>
      </div>
      </div>
    );
};

export default Login;
