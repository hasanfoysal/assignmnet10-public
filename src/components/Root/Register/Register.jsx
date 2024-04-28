
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import Result from "postcss/lib/result";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);


    const {createUser,} = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email,password,name,photo);

        setRegisterError('');
        setSuccess('');

        if(password.length <6){
          setRegisterError('password should be at least 6 characters or longer');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('your password should have at least one upper case character');
          return;
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess('user created successfully.')
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })
        
    }
    return (
        <div >
        <div className="hero min-h-screen bg-base-200" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"data-aos="flip-right" data-aos-duration="2000">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 ">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-500"data-aos="flip-left" data-aos-duration="2000">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
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
                <button  className="btn btn-primary">Register</button>
              </div>
              {
              registerError && <p className="text-red-700 pl-4 pb-16">{registerError}</p>
            }
            {
              success && <p className="text-green-600 ml-4 mb-16">{success}</p>
            }
              <div className='my-2'>
                
                {/* <hr /> */}
               {/* <h1 className='text-center'>Login with social account</h1> */}
               <div className='flex align-middle justify-center gap-2'>
                {/* <img className='w-8 h-8' src="/public/download (4).png" alt="" />
                <img className='w-8 h-8' src="/public/download (5).png" alt="" /> */}
                
               </div>
               <h3 className='text-center'>Already have an account? <Link className='text-sky-500 font-semibold' to='/login'>Login</Link> </h3>
              </div>
            </form> 
            {/* {
              registerError && <p className="text-red-700 pl-4 pb-16">{registerError}</p>
            }
            {
              success && <p className="text-green-600 ml-4 mb-16">{success}</p>
            } */}
          </div>
        </div>
      </div>
      </div>
    );
};

export default Register;
