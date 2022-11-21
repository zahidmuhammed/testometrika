import Home from './pages/Home';
import { QuizPage } from './pages/QuizPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Router basename={window.location.pathname || ''}>
			<Routes>
				<Route path="/quiz/:id" element={<QuizPage />} />
				<Route exact path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
