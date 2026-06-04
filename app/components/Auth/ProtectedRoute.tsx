import {Navigate, Outlet} from  'react-router'

export default function ProtectedLayout() {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;

}