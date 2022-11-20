import React from 'react';
import { QuizData } from '../data/QuizData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Think_Logo from '../images/think_logo.svg';

const QuizIntro = ({ id, setIsStarted, handleStart }) => {
	return (
		<>
			<Header />
			<div className="bg-[#6b6fbc]  text-white md:h-screen flex  items-center flex-col">
				<div className="h-20"></div>
				<div className="w-full flex flex-col items-center justify-center">
					<img
						className="py-3"
						src={Think_Logo}
						height={150}
						width={150}
						alt=""
					/>
					<div className="text-white text-2xl font-bold py-3">
						{QuizData.map(item => {
							if (item.id === id) return <>{item.name}</>;
							return null;
						})}
					</div>
				</div>
				<div
					onClick={() => {
						setIsStarted(true);
						handleStart();
					}}
					className="hover:border bg-[#4f4e66] px-8 py-4 my-4 h-10 flex items-center rounded-md cursor-pointer"
				>
					Start Test
				</div>
				<div className="px-10 md:px-16 py-6">
					{QuizData.map(item => {
						if (item.id === id) return <>{item.description}</>;
						return null;
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default QuizIntro;
