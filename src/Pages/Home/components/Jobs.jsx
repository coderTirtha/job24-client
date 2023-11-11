import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import CategoryJob from "./CategoryJob";


const Jobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState('Web-Development');
    const url = `https://job24-server.vercel.app/jobs/category?email=${user?.email}&category=${category}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setJobs(res.data);
            });
    }, [user, url]);
    return (
        <div className="my-12">
            <h1 className="text-center text-5xl font-bold">Available Jobs</h1>
            <div className="tabs tabs-boxed max-w-md lg:max-w-lg mx-auto flex justify-center my-4">
                <a onClick={() => setCategory("Web-Development")} className={`tab ${category === "Web-Development" ? 'tab-on-active' : ''}`}>Web Development</a>
                <a onClick={() => setCategory("Digital-Marketing")} className={`tab ${category === "Digital-Marketing" ? 'tab-on-active' : ''}`}>Digital Marketing</a>
                <a onClick={() => setCategory("Graphics-Design")} className={`tab ${category === "Graphics-Design" ? 'tab-on-active' : ''}`}>Graphics Design</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-8 my-8">
                {
                    jobs.map(job => <CategoryJob key={job._id} job={job}></CategoryJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;