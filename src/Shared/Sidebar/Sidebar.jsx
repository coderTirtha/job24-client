import { BsChevronRight, BsBriefcaseFill } from "react-icons/bs";
import { BiData, BiLogIn } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePullRequest } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import logoWhite from '../../assets/images/logoWhite.png';
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({open, setOpen}) => {
    
    const menus = <>
        <li className="text-gray-300 cursor-pointer duration-150 mt-2" title="Home">
            <NavLink to='/' className={`flex items-center p-2 gap-x-4 rounded-md hover:bg-[#8D99AE] transition ease-linear duration-200`}>
                <AiOutlineHome className={`${open ? '' : 'flex-1'} text-xl`} /><span className={`${open ? '' : 'hidden'}`}>Home</span>
            </NavLink>
        </li>
        <li className="text-gray-300 cursor-pointer duration-150 mt-2" title="Add Job">
            <NavLink to='/addJob' className={`flex items-center p-2 gap-x-4 rounded-md hover:bg-[#8D99AE] transition ease-linear duration-200`}>
                <BsBriefcaseFill className={`${open ? '' : 'flex-1'} text-xl`} /><span className={`${open ? '' : 'hidden'}`}>Add Job</span>
            </NavLink>
        </li>
        <li className="text-gray-300 cursor-pointer duration-150 mt-2" title="Posted Jobs">
            <NavLink to='/postedJobs' className={`flex items-center p-2 gap-x-4 rounded-md hover:bg-[#8D99AE] transition ease-linear duration-200`}>
                <GiNotebook className={`${open ? '' : 'flex-1'} text-xl`} /><span className={`${open ? '' : 'hidden'}`}>Posted Jobs</span>
            </NavLink>
        </li>
        <li className="text-gray-300 cursor-pointer duration-150 mt-2" title="My Bids">
            <NavLink to='/myBids' className={`flex items-center p-2 gap-x-4 rounded-md hover:bg-[#8D99AE] transition ease-linear duration-200`}>
                <BiData className={`${open ? '' : 'flex-1'} text-xl`} /><span className={`${open ? '' : 'hidden'}`}>My Bids</span>
            </NavLink>
        </li>
        <li className="text-gray-300 cursor-pointer duration-150 mt-2" title="Bid Requests">
            <NavLink to='/bidRequests' className={`flex items-center p-2 gap-x-4 rounded-md hover:bg-[#8D99AE] transition ease-linear duration-200`}>
                <AiOutlinePullRequest className={`${open ? '' : 'flex-1'} text-xl`} /><span className={`${open ? '' : 'hidden'}`}>Bid Requests</span>
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className={`${open ? 'w-64' : 'w-20'} bg-[#2B2D42] duration-150 h-screen fixed`}>
                <button className={`btn btn-circle absolute top-6 -right-5 border-4 border-[#2B2D42] hover:border-[#2B2D42] ${open && 'rotate-180'} z-10`} onClick={() => setOpen(!open)}>
                    <BsChevronRight className="font-bold" />
                </button>
                <div className="pt-3 absolute w-full flex flex-col justify-between gap-6">
                    <div className="flex justify-center">
                        <img src={logoWhite} alt="" className="w-32" />
                    </div>
                    <ul className={`mt-12 ${open ? 'p-4' : 'p-2'} w-full`}>
                        {menus}
                    </ul>
                    <Link to={'/login'} className="btn bg-transparent text-white border-2 border-white mx-2 hover:bg-[#8D99AE] hover:border-[#8D99AE]">
                        <BiLogIn className="text-xl" />
                        <span className={`${open ? '' : 'hidden'}`}>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;