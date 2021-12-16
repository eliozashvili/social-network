import classes from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Messages/Messages';
import { messageData, dialogueData } from './../../../index';

const Dialogues = props => {
    const dialogueElements = dialogueData.map(dialogue => (
        <Dialogue key={dialogue.id} id={dialogue.id} name={dialogue.name} />
    ));

    const messageElements = messageData.map(msg => (
        <Message key={msg.id} message={msg.message} />
    ));

    return (
        <div className={classes.dialogues}>
            <div>{dialogueElements}</div>
            <div>{messageElements}</div>
        </div>
    );
};

export default Dialogues;
