import classes from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Messages/Messages';
import React from 'react';

const Dialogues = props => {
    const dialogueElements = props.dialogue.dialogueData.map(dialogue => (
        <Dialogue key={dialogue.id} id={dialogue.id} name={dialogue.name} />
    ));

    const messageElements = props.dialogue.messageData.map(msg => (
        <Message key={msg.id} message={msg.message} />
    ));

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        const msg = newMessageElement.current.value;
        alert(msg);
    };

    return (
        <div className={classes.dialogues}>
            <div>{dialogueElements}</div>
            <div>{messageElements}</div>
            <div className={classes.newMessage}>
                <textarea
                    ref={newMessageElement}
                    placeholder='Enter your message...'
                    className={classes.msgTxtarea}
                ></textarea>
                <br />
                <button onClick={sendMessage} className={classes.sendBtn}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Dialogues;
