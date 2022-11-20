import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
	return (
		<div className="flex justify-between h-20 border fixed w-full bg-white">
			<div className="flex">
				<div className="w-14 md:w-20 md:border-r cursor-pointer flex justify-center items-center">
					<GiHamburgerMenu size={32} color="#00a1eb" />
				</div>
				<div className="px-6 text-[#5e5c74] text-2xl flex justify-center items-center font-black">
					<Link to="/">testometrika</Link>
				</div>
			</div>
			<div className="flex">
				<div className=" hidden md:flex justify-center items-center">
					<input
						type="text"
						placeholder="Search tests..."
						className="bg-[#f1f4f7] py-3 outline-none px-3 rounded"
					/>
				</div>
				<div className="flex justify-center items-center px-5 cursor-pointer">
					<BiUserCircle size={38} color="#5e5c74" />
				</div>
			</div>
		</div>
	);
};

export default Header;
