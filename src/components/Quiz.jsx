import React from 'react';
import Questions from './Questions';

const Quiz = () => {
	return (
		<div className="quiz">
			<div className="score">Question 1/8</div>
			<Questions />
			<div className="next-button">next question</div>
		</div>
	);
};

export default Quiz;
