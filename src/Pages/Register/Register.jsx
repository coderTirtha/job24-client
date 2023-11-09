import { Link } from 'react-router-dom';
import register from '../../assets/images/login.gif';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const {user, loading, createUser, updateUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUser(name, photo)
            .then(res => {
                toast.success("User Profile Created Successfully!");
            })
            .catch(error => {
                toast.error(error.message);
            })
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className='flex flex-col md:flex-row-reverse my-12'>
            <div className='flex-1'>
                <img src={register} alt="" />
            </div>
            <div className='flex-1 flex justify-center items-center rounded-md p-4 m-4 border-2 border-gray-300'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Register your Identity!</h1>
                    <form className='mt-4' onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
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
                        <input type="submit" value="Register" className='btn btn-block btn-outline text-[#D90429] hover:bg-[#D90429] hover:text-white hover:border-[#D90429] mt-6' />
                    </form>
                    <div className='text-center mt-8 mb-4'>
                        <p>Already have an account? <Link className='text-[#EF233C] font-bold' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;