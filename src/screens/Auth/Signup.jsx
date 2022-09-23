import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./Auth.css";

export function Signup() {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [formErrors, setFormErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(user);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			signupHandler(user.email, user.password);
		}
	};

	const validate = (values) => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid Email format ";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 5) {
			errors.password = "Password must be more than 6 characters";
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = "Confirm Password is required";
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = "Passwords do not match";
		}
		return errors;
	};

	const { signupHandler } = useAuth();

	return (
		<main className='Auth-page'>
			<div className='Auth-Quiz' onClick={() => navigate("/")}>
				Quiz App
			</div>
			<form className='Auth-form' onSubmit={handleSubmit}>
				<div className='Auth-heading'>Signup</div>
				<div className='Auth-input'>
					<label className='Auth-label' htmlFor='email'>
						Email address
					</label>
					<input
						className='Auth-input'
						type='email'
						id='email'
						name='email'
						placeholder='john.doe@gmail.com'
						onChange={handleChange}
						value={user.email}
						required
					/>
					<p className='error-msg'>{formErrors?.email}</p>
				</div>

				<div className='Auth-input'>
					<label className='Auth-label' htmlFor='password'>
						Password
					</label>
					<input
						className='input'
						id='password'
						name='password'
						placeholder='************'
						type='password'
						onChange={handleChange}
						value={user.password}
					/>
					<p className='error-msg'>{formErrors?.password}</p>
				</div>

				<div className='Auth-input'>
					<label className='Auth-label' htmlFor='re-password'>
						Confirm Password
					</label>
					<input
						className='input'
						id='re-password'
						placeholder='************'
						name='confirmPassword'
						type='password'
						onChange={handleChange}
						value={user.confirmPassword}
					/>
					<p className='error-msg'>{formErrors?.confirmPassword}</p>
				</div>

				<div className='Auth-buttons'>
					<button>Create account</button>
				</div>
				<div className='Auth-login-link'>
					<span>Already have account ? </span>
					<Link className='Auth-linkTo' to='/login'>
						Login
					</Link>
				</div>
			</form>
		</main>
	);
}
