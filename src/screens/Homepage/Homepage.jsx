import React from "react";
import "./Homepage.css";
import LoginIcon from "@mui/icons-material/PermIdentityOutlined";
import DarkThemeIcon from "@mui/icons-material/DarkModeOutlined";
import LightThemeIcon from "@mui/icons-material/WbSunnyOutlined";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contexts/category-context";
import { useAuth, useQuestion, useTheme } from "../../contexts";

export const Homepage = () => {
	const { categories } = useCategory();
	const { getSelectedCategoryQuestions } = useQuestion();
	const { token, logoutHandler } = useAuth();
	const { theme, toggleTheme } = useTheme();

	const navigate = useNavigate();

	return (
		<>
			<div className='Homepage-container'>
				<div className='Heading-container'>
					<div className='Icon' onClick={toggleTheme}>
						{theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
					</div>

					<div className='Quiz-header'>Quiz App</div>
					{token ? (
						<div className='Logout' onClick={logoutHandler}>
							Logout{" "}
						</div>
					) : (
						<div className='Icon' onClick={() => navigate("/login")}>
							<LoginIcon />
						</div>
					)}
				</div>
				<div className='Quiz-container'>
					{categories.map((category) => {
						return (
							<div
								key={category._id}
								className='Quiz-box'
								onClick={() => {
									getSelectedCategoryQuestions(category.name, token);
								}}>
								<div className='Box-img'>
									<img src={category.image} alt='' />
								</div>
								<div className='Box-start'>{category.name}</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
