import banner from '../../../assets/images/banner.gif';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg flex-1" />
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Find your <br /> Suited Jobs & <br /> Candidates here!</h1>
                        <p className="py-6">Find your next great career with Job24! Browse thousands of job postings from top companies. Create your free profile today and get started!</p>
                        <button className="btn bg-[#EF233C] text-white hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;