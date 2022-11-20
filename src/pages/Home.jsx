import { Link } from 'react-router-dom';
import { FaSortDown } from 'react-icons/fa';

import { QuizData } from '../data/QuizData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Quiz_Logo from '../images/quiz_logo.svg';

const Home = () => {
	return (
		<div>
			<Header />
			<div className="bg-[#f1f4f7] ">
				<div className="h-20"></div>
				<div className="w-full flex flex-col items-center justify-center">
					<img
						className="py-3"
						src={Quiz_Logo}
						height={150}
						width={150}
						alt=""
					/>
					<div className="text-[#5e5c74] text-2xl font-bold py-3">
						Personality and character
					</div>
				</div>
				<div className="flex px-8 md:px-14 w-full justify-between">
					<div className="py-2 px-5 border bg-[#d9e1e7] rounded-md flex items-center cursor-pointer">
						<span className="pr-2">Category</span>
						<FaSortDown />
					</div>

					<div className="py-2 px-5 border bg-[#d9e1e7] rounded-md flex items-center cursor-pointer">
						<span className="pr-2">Popular</span>
						<FaSortDown />
					</div>
				</div>
				<div className="px-12 py-5 w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
					{QuizData.map((item, index) => {
						return (
							<Link to={`/quiz/${item.id}`} key={index}>
								<div className="flex gap-3 items-center hover:shadow-md py-4 mx-2 px-5 bg-white  rounded-md cursor-pointer">
									<div className=" flex">
										<img
											className=""
											src={Quiz_Logo}
											height={70}
											width={70}
											alt=""
										/>
									</div>
									<div className="text-[#5e5c74]">
										{item.name}
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
