import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Job from './Job';

const PostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `https://job24-server.vercel.app/jobs?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setPostedJobs(res.data);
            });
    }, [url]);
    return (
        <div>
            <Helmet>
                <title>Job24 | Posted Jobs</title>
            </Helmet>
            <div className='my-12'>
                <h1 className='text-4xl font-bold'>My Posted Jobs : {postedJobs.length}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 mx-4'>
                    {
                        postedJobs.map(job => <Job key={job._id} job={job}></Job>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostedJobs;