import {createContext, useReducer} from 'react';
import data from '/data.js';

const initialState = {
	questions: data,
	currentQuestionIdx: 0,
	showResults: false,
};

const reducer = (state, action) => {
	if (action.type === 'NEXT_QUESTION') {
		const showResults = state.currentQuestionIdx === state.questions.length - 1;
		const currentQuestionIdx = showResults
			? state.currentQuestionIdx
			: state.currentQuestionIdx + 1;
		return {
			...state,
			currentQuestionIdx,
			showResults,
		};
	}

	if (action.type === 'RESTART') {
		return initialState;
	}

	return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
	const value = useReducer(reducer, initialState);
	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
