import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Content/Dialogues/Dialogues';
import Profile from './components/Content/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Nav';

const App = props => {
	return (
		<BrowserRouter>
			<div className="main-wrapper">
				<Header />
				<Navigation />
				<div className="content">
					<Routes>
						<Route path='/profile' element={<Profile messageInPost={props.messageInPost} />} />
						<Route path='/dialogue/*' element={<Dialogues dialogueData={props.dialogueData} messageData={props.messageData} />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;