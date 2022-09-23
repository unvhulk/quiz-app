import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./Auth.css";

export function Login() {
	const navigate = useNavigate();

	const { guestLoginHandler, loginHandler, error } = useAuth();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginHandler(user.email, user.password);
	};
	return (
		<main className='Auth-page'>
			<div className='Auth-Quiz' onClick={() => navigate("/")}>
				Quiz App
			</div>
			<form className='Auth-form' onSubmit={handleSubmit}>
				<div className='Auth-heading'>Login</div>
				<p className='error-msg'>{error?.response.data?.errors}</p>
				<div className='Auth-input'>
					<label className='Auth-label' htmlFor='email'>
						Email address
					</label>
					<input
						className='Auth-input'
						name='email'
						id='email'
						type='email'
						placeholder='john@doe.com'
						value={user.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Auth-input'>
					<label className='Auth-label' htmlFor='password'>
						Password
					</label>
					<input
						className='input'
						name='password'
						id='password'
						placeholder='************'
						type='password'
						onChange={handleChange}
						value={user.password}
						required
					/>
				</div>

				<div className='Auth-buttons'>
					<button type='submit'>Login</button>
					<button onClick={guestLoginHandler}>Guest Login</button>
				</div>
				<div className='Auth-login-link'>
					<span>Dont have an account ?</span>
					<Link className='Auth-linkTo' to='/signup'>
						Signup
					</Link>
				</div>
			</form>
		</main>
	);
}
