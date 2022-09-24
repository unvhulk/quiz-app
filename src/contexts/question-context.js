import { useState, useContext, createContext, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionContext = createContext();
const useQuestion = () => useContext(QuestionContext);

function QuestionProvider({ children }) {
	const navigate = useNavigate();
	const location = useLocation();

	const initialTimerValue = 30;
	const initialIndexValue = 0;
	const initialScore = 0;
	const initialQuestions = useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get("api/quizzes");
		if (response.status === 200) setQuestions(response.data.quizes);
	};

	const [seconds, setSeconds] = useState(initialTimerValue);
	const [score, setScore] = useState(initialScore);
	const [selectedOption, setSelectedOption] = useState([]);
	const [category, setCategory] = useState("");
	const [error, setError] = useState(false);

	const [questions, setQuestions] = useState([initialQuestions]);
	const curQueIndexRef = useRef(initialIndexValue);
	const categoryQuestionsRef = useRef([]);

	const getSelectedCategoryQuestions = (name) => {
		setCategory(name);
		setScore(initialScore);
		curQueIndexRef.current = initialIndexValue;
		getData();
		categoryQuestionsRef.current = questions.filter(
			(question) => question.categoryName.toLowerCase() === name.toLowerCase()
		);
		setSelectedOption([]);
		navigate("/rules", { state: { from: location } });
	};

	const nextQuestionHandler = () => {
		if (selectedOption.length >= 0 || selectedOption.length === undefined) {
			setSeconds(initialTimerValue);
			curQueIndexRef.current++;
		} else {
			setError(true);
		}
		setSelectedOption([]);
	};

	const viewResult = () => {
		navigate("/results");
	};

	const QuitQuiz = () => {
		navigate("/");
	};

	const selectOptionHandler = (entireOption) => {
		setError(false);
		if (entireOption.isCorrect) {
			setScore(score + 1);
		}
		setSelectedOption(entireOption);
		categoryQuestionsRef.current[curQueIndexRef.current].userAnswer =
			entireOption.text;
	};

	return (
		<QuestionContext.Provider
			value={{
				category,
				score,
				seconds,
				setSeconds,
				questions,
				setQuestions,
				curQueIndexRef,
				error,
				viewResult,
				selectedOption,
				categoryQuestionsRef,
				selectOptionHandler,
				nextQuestionHandler,
				QuitQuiz,
				getData,
				getSelectedCategoryQuestions,
			}}>
			{children}
		</QuestionContext.Provider>
	);
}

export { QuestionProvider, useQuestion };
