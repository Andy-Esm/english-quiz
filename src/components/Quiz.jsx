import React, {useContext} from 'react';
import {QuizContext} from '../context/quiz.jsx';
import Question from './Question';

const Quiz = () => {
	const [quizState, dispatch] = useContext(QuizContext);
	const numberOfQuestion = `${quizState.currentQuestionIdx + 1}/${quizState.questions.length}`;

	return (
		<div className='quiz'>
			{quizState.showResults && (
				<div className={'results'}>
					<div className={'congratulation'}>Congratulation</div>
					<div className={'results-info'}>
						<div>You have complete the quiz.</div>
						<div>
							You've got {quizState.correctAnswerCount} of {quizState.questions.length}
						</div>
						<button
							className={'next-button'}
							onClick={() => dispatch({type: 'RESTART'})}
						>
							Restart quiz
						</button>
					</div>
				</div>
			)}
			{!quizState.showResults && (
				<div>
					<div className='score'>Question {numberOfQuestion} </div>
					<Question />
					<div
						className='next-button'
						onClick={() => dispatch({type: 'NEXT_QUESTION'})}
					>
						next question
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
