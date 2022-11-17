import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import {QuizProvider} from './context/quiz.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QuizProvider>
			<Quiz />
		</QuizProvider>
	</React.StrictMode>
);
