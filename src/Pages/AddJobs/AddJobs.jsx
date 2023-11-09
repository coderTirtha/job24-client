import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const handleAddJob = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const jobTitle = form.get('jobTitle');
        const deadline = form.get('deadline');
        const email = user?.email;
        const category = form.get('category');
        const minPrice = form.get('minPrice');
        const maxPrice = form.get('maxPrice');
        const description = form.get('description');
        const newJob = { jobTitle, deadline, email, category, minPrice, maxPrice, description }
        console.log(newJob);
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    toast.success("Job Added successfully!");
                }
            });
    }
    return (
        <div>
            <Helmet>
                <title>Job24 | Add Job</title>
            </Helmet>
            <div className='max-w-lg mx-auto my-12 border-2 border-gray-200 rounded px-6 py-12'>
                <h1 className='text-4xl font-bold text-center'>Add your Job here</h1>
                <form className='my-8' onSubmit={handleAddJob}>
                    <div className='flex gap-2'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" placeholder="Job Title" name='jobTitle' className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name='deadline' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" defaultValue={user.email} name='email' className="input input-bordered text-gray-400" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className='input input-bordered' id="">
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphics Design">Graphics Design</option>
                        </select>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <input type="number" placeholder="Minimum Price" name='minPrice' className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <input type="number" placeholder="Maximum Price" name='maxPrice' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name='description' className="input input-bordered" required />
                    </div>
                    <input type="submit" value="Add Job" className='btn btn-block bg-transparent text-[#EF233C] border-[#EF233C] hover:bg-[#EF233C] hover:text-white mt-6' />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddJob;