import { useAuth } from "contexts";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
	const { token } = useAuth();
	const location = useLocation();
	return token ? <Outlet /> : <Navigate to='/login' state={location} />;
};
