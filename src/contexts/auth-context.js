import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const pathname = location.state?.pathname ?? "/";

	const [error, setError] = useState(null);
	const [token, setToken] = useState("");

	useEffect(() => {
		error && console.error(error);
	}, [error]);

	const loginHandler = async (email, password) => {
		try {
			const response = await axios.post("api/auth/login", {
				email,
				password,
			});
			localStorage.setItem("token", response.data.encodedToken);
			setToken(response.data.encodedToken);
			navigate(pathname);
		} catch (error) {
			setError(error);
		}
	};

	const signupHandler = async (email, password) => {
		try {
			const response = await axios.post("/api/auth/signup", {
				email,
				password,
			});
			localStorage.setItem("token", response.data.encodedToken);
			setToken(response.data.encodedToken);
			navigate(pathname);
		} catch (error) {
			setError(error);
		}
	};

	const guestLoginHandler = async () => {
		const response = await axios.post("/api/auth/login", {
			email: "derek@bishop.com",
			password: "asdfasdf",
		});

		localStorage.setItem("token", response.data.encodedToken);
		setToken(response.data.encodedToken);
		navigate(pathname);
	};

	const logoutHandler = () => {
		localStorage.removeItem("token");
		setToken("");
		navigate("/");
	};

	return (
		<AuthContext.Provider
			value={{
				guestLoginHandler,
				loginHandler,
				signupHandler,
				logoutHandler,
				error,
				token,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
