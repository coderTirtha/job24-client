import { BsChevronRight, BsBriefcaseFill } from "react-icons/bs";
import { BiData, BiLogIn, BiUserCircle } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePullRequest } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import logoWhite from '../../assets/images/logoWhite.png';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Sidebar = ({ open, setOpen }) => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
            .then(res => { })
            .catch(error => { });
    }
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
                <div className="pt-2 absolute w-full flex flex-col justify-between gap-6">
                    <div className="flex justify-center">
                        <img src={logoWhite} alt="" className="w-32" />
                    </div>
                    <ul className={`mt-4 ${open ? 'p-4' : 'p-2'} w-full`}>
                        {menus}
                    </ul>
                    {
                        user ?
                            <>
                                <div title="Profile" className="flex justify-center rounded-md items-center duration-150 p-2">
                                    <div className="text-gray-300 flex items-center">
                                        <Link to={'/profile'} className="hover:bg-[#8D99AE] rounded-tl-md rounded-bl-md p-2 flex items-center gap-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} alt="" className="w-[23px] rounded-full" /> :
                                                    <BiUserCircle className="text-2xl" />
                                            }
                                            <div className={`${open ? '' : 'hidden'} text-xs`}>
                                                <p className="font-bold">{user?.displayName ? user.displayName : 'Guest'}</p>
                                                <p>{user.email}</p>
                                            </div>
                                        </Link>
                                        <div className={`${open ? '' : 'hidden'}`}>
                                            <button onClick={handleLogOut} className="btn bg-transparent mx-2 text-white hover:text-black"><FiLogOut /></button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className={`btn bg-transparent mx-2 text-white hover:text-black ${open ? 'hidden': ''}`}><FiLogOut /></button>
                            </> :
                            <Link to={'/login'} className="btn bg-transparent text-white border-2 border-white mx-2 hover:bg-[#8D99AE] hover:border-[#8D99AE]">
                                <BiLogIn className="text-xl" />
                                <span className={`${open ? '' : 'hidden'}`}>Login</span>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;