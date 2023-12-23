import { useContext } from "react";
import { AuthContext } from "../../Authentication/Authprovider/AuthProvider";






const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;