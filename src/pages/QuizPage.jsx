import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import Result from './Result';
import QuizIntro from './QuizIntro';
import { formatTime } from '../Util/Utilities';
import {
	Questions001,
	Questions002,
	Questions003,
	Questions004,
	Questions005,
} from '../data/Questions';

export const QuizPage = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const { id } = useParams();

	let Questions = [];

	switch (id) {
		case '001':
			Questions = Questions001;
			break;
		case '002':
			Questions = Questions002;
			break;
		case '003':
			Questions = Questions003;
			break;
		case '004':
			Questions = Questions004;
			break;
		case '005':
			Questions = Questions005;
			break;
		default:
			Questions = [];
	}

	const [scoreHistory, setScoreHistory] = useState([]);
	//timer
	const [timer, setTimer] = useState(0);
	const countRef = useRef(null);

	const handleStart = () => {
		countRef.current = setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
	};

	const handlePause = () => {
		clearInterval(countRef.current);
	};

	const handleAnswerButtonClick = isCorrect => {
		if (isCorrect) {
			scoreHistory.push(1);
		} else {
			scoreHistory.push(0);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			handlePause();
			setShowScore(true);
		}
	};

	const handleBackButtonClick = () => {
		const nextQuestion = currentQuestion - 1;
		if (nextQuestion >= 0) {
			setCurrentQuestion(nextQuestion);
			scoreHistory.pop();
		}
	};

	return (
		<div>
			{isStarted ? (
				<div className="flex flex-col w-full h-screen bg-[#6b6fbc] text-white">
					{showScore ? (
						<Result
							timer={timer}
							scoreHistory={scoreHistory}
							Questions={Questions}
						/>
					) : (
						<>
							<div className="h-20 flex items-center justify-between px-12 text-xl font-bold">
								<div>
									<span className="text-violet-300">
										{currentQuestion + 1}
									</span>
									/{Questions.length}
								</div>
								<div className="text-red-300">
									{formatTime(timer)}
								</div>
								<div className="text-violet-300 cursor-pointer">
									<Link to="/">X</Link>
								</div>
							</div>
							{Questions[currentQuestion].isImageQuestion && (
								<div className="w-full flex justify-center py-4 px-2">
									<img
										src={
											Questions[currentQuestion]
												.questionImage
										}
										height={200}
										width={500}
										alt=""
									/>
								</div>
							)}
							<div className="md:px-24 mb-6 py-6 mx-12 text-2xl font-bold flex justify-center">
								{currentQuestion + 1}.{' '}
								{Questions[currentQuestion].questionText}
							</div>
							{Questions[currentQuestion].isImageQuestion ? (
								<div className="grid grid-cols-2 gap-6 justify-center items-center md:flex md:flex-row md:gap-8">
									{Questions[
										currentQuestion
									].answerOptions.map(
										(answerOption, index) => (
											<div
												key={index}
												className="hover:opacity-70 cursor-pointer flex justify-center"
											>
												<img
													onClick={() =>
														handleAnswerButtonClick(
															answerOption.isCorrect
														)
													}
													className="h-20 w-20 md:h-24 md:w-24 "
													src={answerOption.answerPic}
													width={100}
													height={100}
													alt=""
												/>
											</div>
										)
									)}
								</div>
							) : (
								<div className="flex flex-col px-24 mx-12 gap-12">
									{Questions[
										currentQuestion
									].answerOptions.map(
										(answerOption, index) => (
											<div
												key={index}
												onClick={() =>
													handleAnswerButtonClick(
														answerOption.isCorrect
													)
												}
												className="border min-w-max py-2 px-3 rounded-md hover:opacity-70 cursor-pointer"
											>
												{answerOption.answerText}
											</div>
										)
									)}
								</div>
							)}

							<div className="flex w-full justify-center my-3">
								<div
									onClick={() => handleBackButtonClick()}
									className="border px-6 my-4 py-2 rounded-md bg-slate-600 cursor-pointer"
								>
									<BiArrowBack />
								</div>
							</div>
						</>
					)}
				</div>
			) : (
				<QuizIntro
					id={id}
					setIsStarted={setIsStarted}
					handleStart={handleStart}
				/>
			)}
		</div>
	);
};
