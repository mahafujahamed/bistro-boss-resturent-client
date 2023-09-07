import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;