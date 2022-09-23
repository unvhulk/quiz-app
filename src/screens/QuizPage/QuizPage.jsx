import { useEffect } from "react";
import { useState } from "react";
import { useQuestion } from "../../contexts";
import "./QuizPage.css";

export const QuizPage = () => {
	const {
		nextQuestionHandler,
		category,
		categoryQuestionsRef,
		seconds,
		setSeconds,
		error,
		QuitQuiz,
		curQueIndexRef,
		selectOptionHandler,
		viewResult,
		selectedOption,
	} = useQuestion();

	const [select, isSelect] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds(seconds - 1);
		}, 1000);
		if (seconds === 0) {
			if (categoryQuestionsRef.current.length === curQueIndexRef.current + 1) {
				viewResult();
			}
			setSeconds(30);
			curQueIndexRef.current++;
		}
		return () => clearInterval(timer);
	});

	return (
		<>
			<div className='Quiz-page'>
				<div className='Quiz-heading'>{category}</div>
				<div className='Quiz-screen'>
					<div className='Question-detail'>
						<div className='Question-no'>
							Question : 0{curQueIndexRef.current + 1} / 0
							{categoryQuestionsRef.current.length}
						</div>
						<div className='Question-timer'>
							00:{seconds < 10 ? "0" + seconds : seconds}
						</div>
						<p className='error-msg'>{error}</p>
					</div>
					<div className='Quiz-questions'>
						{categoryQuestionsRef.current[curQueIndexRef.current]?.questionText}
					</div>
					<div className='Quiz-options'>
						{categoryQuestionsRef.current[curQueIndexRef.current].options.map(
							(option) => {
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
							}
						)}
					</div>
					<div className='Quiz-buttons'>
						<div
							className='Exit'
							onClick={() => {
								QuitQuiz();
								isSelect(false);
							}}>
							Exit
						</div>
						<div
							className='Next'
							onClick={() => {
								isSelect(false);
								return categoryQuestionsRef.current.length ===
									curQueIndexRef.current + 1
									? viewResult()
									: nextQuestionHandler();
							}}>
							{categoryQuestionsRef.current.length ===
							curQueIndexRef.current + 1
								? "Result"
								: "Next"}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
