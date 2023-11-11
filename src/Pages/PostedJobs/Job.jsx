const Job = ({ job }) => {
    const { jobTitle, deadline, email, category, minPrice, maxPrice, description } = job;
    return (
        <div className="border-2 border-gray-200 rounded-md px-4 py-2 space-y-3">
            <h1 className="text-2xl font-bold">{jobTitle}</h1>
            <h3><span className="text-[#EF233C] font-bold">Deadline : </span>{deadline}</h3>
            <hr />
            <p><span className="font-bold">Owner Email : </span>{email}</p>
            <p><span className="font-bold">Category : </span>{category}</p>
            <p><span className="font-bold">Salary Range : </span>${minPrice} - ${maxPrice}</p>
            <p><span className="font-bold">Details : </span>{description}</p>
            <div className="flex flex-col gap-4">
                <button className="btn btn-block btn-outline btn-success">Update Job</button>
                <button className="btn btn-block btn-outline text-[#EF233C]">Delete Job</button>
            </div>
        </div>
    );
};

export default Job;