import { Link } from 'react-router-dom';
import error from '../../assets/images/error.gif';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center h-screen'>
            <Helmet>
                <title>Job24 | Error</title>
            </Helmet>
            <img src={error} alt="" />
            <p>The page you are trying to access may have been removed to other directory or under development!</p>
            <Link to={'/'}>
                <button className='btn'>Go back to Home</button>
            </Link>
        </div>
    );
};

export default Error;