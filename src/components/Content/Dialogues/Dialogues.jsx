import classes from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Messages/Messages';

const Dialogues = props => {
    const dialogueElements = props.dialogue.dialogueData.map(dialogue => (
        <Dialogue key={dialogue.id} id={dialogue.id} name={dialogue.name} />
    ));

    const messageElements = props.dialogue.messageData.map(msg => (
        <Message key={msg.id} message={msg.message} />
    ));
    debugger;
    return (
        <div className={classes.dialogues}>
            <div>{dialogueElements}</div>
            <div>{messageElements}</div>
        </div>
    );
};

export default Dialogues;
