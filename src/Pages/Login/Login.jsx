import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log('location on login page',location)


    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password =form.get('password')
        console.log(email, password)
        signIn(email, password)
        .then(result => {
          console.log(result.user)
          navigate(location?.state?location.state :'/')
        })
        .catch(error => {
          console.log(error)
        })

    }
    return (
        <div className='max-w-6xl '>
               <div className="card mx-auto mt-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    <p className='text-center'>Dont’t Have An Account ? <Link to='/register' className='font-medium text-blue-500'> Register</Link></p>
    </div>
        </div>
    );
};

export default Login;
