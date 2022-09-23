import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../contexts";
import "./ResultsPage.css";

export const ResultsPage = () => {
	const { score, categoryQuestionsRef } = useQuestion();
	const navigate = useNavigate();

	const replayHandler = () => {
		navigate("/");
	};
	return (
		<>
			<div className='Quiz-page'>
				<div className='Quiz-heading'>Results Page</div>

				<div className='Results-screen'>
					<div className='Results-info'>
						{score * 10 > (categoryQuestionsRef.current.length * 10) / 2
							? "Congratulations , "
							: "Try again , "}
						you scored {score < 1 ? "0" + score : score * 10} out of{" "}
						{categoryQuestionsRef.current.length * 10}
					</div>
					{categoryQuestionsRef.current.map((question) => {
						return (
							<div className='Quiz-results'>
								<div className='Quiz-questions'>
									Q{categoryQuestionsRef.current.indexOf(question) + 1} :
									{question.questionText}
								</div>
								<div className='Results-options'>
									{question.options.map((option) => {
										return (
											<div
												className={`Option ${
													option.isCorrect ? "Green-option" : ""
												}  ${
													(question.userAnswer === option.text) &
													option.isCorrect
														? "Green-option"
														: (question.userAnswer === option.text) &
														  !option.isCorrect
														? "Red-option"
														: ""
												}`}>
												{option.text}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					<div className='Quiz-buttons'>
						<div className='Exit' onClick={() => replayHandler()}>
							Replay
						</div>
					</div>
					{/* <div className='Quiz-questions'>
						{categoryQuestionsRef.current[curQueIndex]?.questionText}
					</div>
					<div className='Quiz-options'>
						{categoryQuestionsRef.current[curQueIndex].options.map((option) => {
							return (
								<div
									className={`Option ${
										selectedOption.text === option.text
											? selectedOption.isCorrect
												? "Green-option"
												: "Red-option"
											: ""
									} ${option.isCorrect ? (select ? "Green-option " : "") : ""}
									  `}
									key={option.id}
									onClick={() => {
										selectOptionHandler(option);
										isSelect(true);
									}}>
									{option.text}
								</div>
							);
						})}
					</div>
					*/}
				</div>
			</div>
		</>
	);
};
