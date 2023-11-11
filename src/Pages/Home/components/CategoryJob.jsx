import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const CategoryJob = ({ job }) => {
    const { user } = useContext(AuthContext);
    const currentDate = new Date();
    const { _id, jobTitle, deadline, email, category, minPrice, maxPrice, description } = job;
    const jobDeadline = new Date(deadline);
    return (
        <div className="border-2 border-gray-200 rounded-md px-4 py-2 space-y-3">
            <h1 className="text-2xl font-bold">{jobTitle}</h1>
            <h3><span className="text-[#EF233C] font-bold">Deadline : </span>{deadline}</h3>
            <hr />
            <p><span className="font-bold">Salary Range : </span>${minPrice} - ${maxPrice}</p>
            <p><span className="font-bold">Details : </span>{description}</p>
            <div className="flex flex-col gap-4">
                {
                    (user?.email === email) || (currentDate >= jobDeadline) ?
                        <button className="btn btn-block btn-outline" disabled={(user?.email === email) || (currentDate >= jobDeadline) ? true : false}>Bid Now</button> :
                        <Link to={`/jobs/${_id}`}>
                            <button className="btn btn-block btn-outline">Bid Now</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default CategoryJob;