import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    console.log("privet routes user", user)

    if (user) {
        return children;
    }
    else {
        return navigate("/login")
    }
};

export default PrivetRoutes;