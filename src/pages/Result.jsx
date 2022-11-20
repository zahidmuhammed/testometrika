import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { SiFacebook, SiWhatsapp, SiTwitter, SiTelegram } from 'react-icons/si';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatTime } from '../Util/Utilities';

const Result = ({ timer, scoreHistory, Questions }) => {
	return (
		<div className="bg-white text-black h-screen">
			<Header />
			<div className="h-20 "></div>
			<div className="border-t-4 border-blue-300 h-[75vh] border-b">
				<div className="md:px-12 mx-6 md:mx-20 py-8">
					<div className="font-bold">Your Result :</div>
					<div>Test Time :- {formatTime(timer)}</div>
					<div>
						Your Score Percentage is{' '}
						{(scoreHistory.filter(x => x === 1).length /
							Questions.length) *
							100}
						%
					</div>
					<div>
						In this test you have{' '}
						{scoreHistory.filter(x => x === 1).length} correct
						answers from {Questions.length}
					</div>
					<div className="pt-8 pb-4">Share result :</div>
					<div className="flex gap-4">
						<SiWhatsapp
							size={28}
							color="#25D366"
							className="cursor-pointer"
						/>
						<SiTelegram
							size={28}
							color="#0088cc"
							className="cursor-pointer"
						/>
						<SiFacebook
							size={28}
							color="#4267B2"
							className="cursor-pointer"
						/>
						<SiTwitter
							size={28}
							color="#1DA1F2"
							className="cursor-pointer"
						/>
					</div>
					<div className="px-6 my-8 py-2 border max-w-min ">
						<Link to="/">
							<BiArrowBack />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Result;
