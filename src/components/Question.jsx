import React, {useContext} from 'react';
import {QuizContext} from '../context/quiz.jsx';
import Answers from './Answers';

function Question() {
	const [quizState, dispatch] = useContext(QuizContext);
	const currentQuestion = quizState.questions[quizState.currentQuestionIdx];

	return (
		<div>
			<div className="question">{currentQuestion.question}</div>
			<div className="answers">
				<Answers />
				<Answers />
				<Answers />
				<Answers />
			</div>
		</div>
	);
}

export default Question;
