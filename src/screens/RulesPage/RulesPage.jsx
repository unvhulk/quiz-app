import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuestion } from "../../contexts";
import "./RulesPage.css";

export const RulesPage = () => {
	const navigate = useNavigate();
	const { QuitQuiz, categoryQuestionsRef } = useQuestion();
	return (
		<div className='Rules-container'>
			<div className='Rules-heading'>Rules For Quiz</div>
			<div className='Quiz-rules'>
				<div className='Rules-list'>
					<ul>
						<li>You can select only 1 answer amongs the given options.</li>
						<li>You will get 1 point for each correct answer.</li>
						<li>
							Only 30 seconds are availble for attempting a single Question.
						</li>
						<li>
							There are total {categoryQuestionsRef.current.length} questions.
						</li>
						<li>Click next to view the next question.</li>
						<li>After completion of all questions you will see final score</li>
					</ul>
				</div>
				<div className='Rules-buttons'>
					<div className='Exit-button' onClick={QuitQuiz}>
						Exit
					</div>
					<div className='Continue-button' onClick={() => navigate("/quiz")}>
						Start
					</div>
				</div>
			</div>
		</div>
	);
};
