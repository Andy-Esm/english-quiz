import {createContext, useReducer} from 'react';
import question from '/data.js';
import {shuffleAnswers} from '../helpers/helpers.jsx';

const initialState = {
	questions: question,
	currentQuestionIdx: 0,
	showResults: false,
	answers: shuffleAnswers(question[0]),
	currentAnswer: '',
	correctAnswersCount: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SELECT_ANSWER': {
			const correctAnswerCount =
				action.payload === state.questions[state.currentQuestionIdx].correctAnswer
					? state.correctAnswersCount + 1
					: state.correctAnswersCount;
			return {
				...state,
				currentAnswer: action.payload,
				correctAnswerCount,
			};
		}
		case 'NEXT_QUESTION': {
			const showResults = state.currentQuestionIdx === state.questions.length - 1;
			const currentQuestionIdx = showResults
				? state.currentQuestionIdx
				: state.currentQuestionIdx + 1;
			const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIdx]);
			return {
				...state,
				currentQuestionIdx,
				showResults,
				answers,
				currentAnswer: '',
			};
		}
		case 'RESTART': {
			return initialState;
		}
		default: {
			return state;
		}
	}

	return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
	const value = useReducer(reducer, initialState);
	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
