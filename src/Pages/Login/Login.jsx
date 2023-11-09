import { Link } from 'react-router-dom';
import login from '../../assets/images/logged.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    const {user, loading, signInUser} = useContext(AuthContext);
    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
        .then(result => {
            if(result.user) {
                toast.success("Successfully Logged In!");
            }
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className='flex flex-col md:flex-row-reverse my-12'>
            <div className='flex-1'>
                <img src={login} alt="" />
            </div>
            <div className='flex-1 flex justify-center items-center rounded-md p-4 m-4 border-2 border-gray-300'>
                <div className='w-full'>
                    <h1 className='text-4xl font-bold text-center'>Login Now!</h1>
                    <form className='mt-4' onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                        </div>
                        <input type="submit" value="Login" className='btn btn-block btn-outline text-[#D90429] hover:bg-[#D90429] hover:text-white hover:border-[#D90429] mt-6' />
                    </form>
                    <div className='text-center mt-8 mb-4'>
                        <p>Don't have an account? <Link className='text-[#EF233C] font-bold' to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;