import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [myBids, setMyBids] = useState([]);
    const url = `https://job24-server.vercel.app/myBids?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyBids(res.data);
            })
    }, [url]);
    return (
        <div className="my-12">
            <Helmet>
                <title>Job24 | My Bids</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center">You have bid for {myBids.length} projects</h1>
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
                            myBids.map((bid, index) => <tr key={bid._id}>
                                <th>{index + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{bid?.ownerEmail}</td>
                                <td>{bid?.bidderEmail}</td>
                                <td>{bid?.bidPrice}</td>
                                <td>{bid?.deadline}</td>
                                <td>
                                    {
                                        bid?.status === 'pending' ?
                                            <button className="btn btn-sm">{bid?.status}</button> :
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

export default MyBids;