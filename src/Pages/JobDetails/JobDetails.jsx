import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const job = useLoaderData();
    const { _id, jobTitle, deadline, email, category, minPrice, maxPrice, description } = job[0];
    const navigate = useNavigate();
    const handleBid = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const bidPrice = form.get('bidPrice');
        const deadline = form.get('deadline');
        const ownerEmail = email;
        const bidderEmail = user?.email;
        const newBid = {bidPrice, deadline, ownerEmail, bidderEmail, status: 'pending'}
        axios.post('https://job24-server.vercel.app/bids', newBid)
        .then(res => {
            if(res.data.insertedId) {
                toast.success("You have successfully bid!");
                setTimeout(() => {
                    navigate('/myBids');
                }, 5000);
            }
        })
    }
    return (
        <div className='my-12 flex mx-4 gap-4 items-center'>
            <div className='flex-1'>
                <div className='rounded-md border-2 border-gray-200 p-4 space-y-4'>
                    <h1 className='text-center font-bold text-2xl my-3'>{jobTitle}</h1>
                    <hr />
                    <h3><span className="text-[#EF233C] font-bold">Deadline : </span>{deadline}</h3>
                    <p><span className="font-bold">Category : </span>{category}</p>
                    <p><span className="font-bold">Salary Range : </span>${minPrice} - ${maxPrice}</p>
                    <p><span className="font-bold">Details : </span>{description}</p>
                </div>
            </div>
            <div className='flex-1 rounded-md border-2 border-gray-200 p-4'>
                <h1 className='text-center text-3xl font-bold'>Place Your Bid!</h1>
                <form onSubmit={handleBid}>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Your Bid Price" name='bidPrice' className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name='deadline' className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Owner Email</span>
                        </label>
                        <input type="email" defaultValue={email} name='ownerEmail' className="input input-bordered text-gray-400" readOnly />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Bidder Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='bidEmail' className="input input-bordered text-gray-400" readOnly />
                    </div>
                    <input type="submit" value="Bid on the Project" className='btn btn-block btn-outline btn-success mt-6' />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;