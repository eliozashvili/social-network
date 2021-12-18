import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Data for Wall
let messageInPost = [
	{
		id: 0,
		postMessage:
			'Lorem ipsumdolor sit amet consectetur, adipisicing elit.',
		likesCount: 69
	},
	{
		id: 1,
		postMessage:
			'Lorem ipsumdolor sit amet consectetur, adipisicing elit.',
		likesCount: 69
	},
	{
		id: 2,
		postMessage:
			'Lorem ipsumdolor sit amet consectetur, adipisicing elit.',
		likesCount: 69
	}
];

// Data for Dialogues
let dialogueData = [
	{ id: 0, name: 'George' },
	{ id: 1, name: 'Anna' },
	{ id: 2, name: 'Illidan' }
];

let messageData = [
	{ id: 0, message: 'Hello, World!' },
	{ id: 1, message: "Let's drink :P" },
	{ id: 2, message: 'Meow?' }
];

ReactDOM.render(
	<React.StrictMode>
		<App messageInPost={messageInPost} dialogueData={dialogueData} messageData={messageData} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
