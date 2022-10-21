import React from 'react';
import Answers from './Answers';

function Questions() {
	return (
		<>
			<div className="question">Text of the question</div>
			<div className="answers">
				<Answers />
				<Answers />
				<Answers />
				<Answers />
			</div>
		</>
	);
}

export default Questions;
