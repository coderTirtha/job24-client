import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className="flex justify-center text-[#8D99AE] items-center gap-4 h-screen">
            <p>Loading</p>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;