import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const PostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/jobs?email=${user?.email}`;
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
            </div>
        </div>
    );
};

export default PostedJobs;