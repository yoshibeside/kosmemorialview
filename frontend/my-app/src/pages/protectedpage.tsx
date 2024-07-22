import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';


const ProtectedRoute = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate('/')
    }, [location.pathname])

    return (
        <>
        </>
    )
}

export default ProtectedRoute;