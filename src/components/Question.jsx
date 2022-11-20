import React, {useContext} from 'react';
import {QuizContext} from '../context/quiz.jsx';
import Answers from './Answers';

function Question() {
	const [quizState, dispatch] = useContext(QuizContext);
	const currentQuestion = quizState.questions[quizState.currentQuestionIdx];

	return (
		<div>
			<div className='question'>{currentQuestion.question}</div>
			<div className='answers'>
				{quizState.answers.map((answer, index) => (
					<Answers
						key={index}
						index={index}
						answerText={answer}
						onSelectAnswer={(answerText) => dispatch({type: 'SELECT_ANSWER', payload: answerText})}
						correctAnswer={currentQuestion.correctAnswer}
						currentAnswer={quizState.currentAnswer}
					/>
				))}
			</div>
		</div>
	);
}

export default Question;
