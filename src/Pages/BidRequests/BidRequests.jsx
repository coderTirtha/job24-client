import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
    const { user } = useContext(AuthContext);
    const [bidRequests, setBidRequests] = useState([]);
    const url = `https://job24-server.vercel.app/bidRequests?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBidRequests(res.data);
            })
    }, [url]);
    const handleAccept = id => {
        const url = `https://job24-server.vercel.app/bidRequests/${id}?email=${user?.email}`;
        const updatedStatus = {status : 'confirmed'}
        axios.patch(url, updatedStatus, {withCredentials: true})
        .then(res => {
            if(res.data.modifiedCount > 0) {
                const remaining = bidRequests.filter(bid => bid._id !== id);
                const updated = bidRequests.find(bid => bid._id === id);
                updated.status = "confirmed";
                const newBids = [updated, ...remaining];
                setBidRequests(newBids);
            }
        });
    }
    const handleDecline = id => {
        const url = `https://job24-server.vercel.app/bidRequests/${id}?email=${user?.email}`;
        const updatedStatus = {status : 'declined'}
        axios.patch(url, updatedStatus, {withCredentials: true})
        .then(res => {
            if(res.data.modifiedCount > 0) {
                const remaining = bidRequests.filter(bid => bid._id !== id);
                const updated = bidRequests.find(bid => bid._id === id);
                updated.status = "declined";
                const newBids = [updated, ...remaining];
                setBidRequests(newBids);
            }
        });
    }
    return (
        <div className="my-12">
            <Helmet>
                <title>Job24 | Bid Requests</title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold">You have total {bidRequests.length} bid requests</h1>
            <div className="overflow-x-auto my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bidder Name</th>
                            <th>Bid Owner Email</th>
                            <th>Bidder Email</th>
                            <th>Bid Price</th>
                            <th>Deadline</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bidRequests.map((bid, index) => <tr key={bid._id}>
                                <th>{index + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{bid?.ownerEmail}</td>
                                <td>{bid?.bidderEmail}</td>
                                <td>{bid?.bidPrice}</td>
                                <td>{bid?.deadline}</td>
                                <td>
                                    {
                                        bid?.status === 'pending' ?
                                            <div className="flex flex-col gap-2">
                                                <button onClick={() => handleAccept(bid._id)} className="btn btn-sm btn-success">Accept</button>
                                                <button onClick={() => handleDecline(bid._id)} className="btn btn-sm btn-error">Decline</button>
                                            </div> :
                                            <p className={`${bid?.status === 'confirmed' ? 'text-green-500' : 'text-red-500'}`}>{bid?.status}</p>

                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequests;