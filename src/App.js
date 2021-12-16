import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Content/Dialogues/Dialogues';
import Profile from './components/Content/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Nav';
import { postElements } from './components/Content/Profile/Profile';

const App = () => {
	return (
		<BrowserRouter>
			<div className="main-wrapper">
				<Header />
				<Navigation />
				<div className="content">
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogue/*' element={<Dialogues />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;