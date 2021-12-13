import classes from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const Dialogue = (props) => {
    let path = '/dialogue/' + props.id;
    return (
        <div className={classes.dialogue}>
            <NavLink
                to={path}
                className={(dialogueData) =>
                    dialogueData.isActive
                        ? classes.activeLink
                        : classes.dialogue
                }
            >
                {props.name}
            </NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>;
};

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            <div>
                <Dialogue id="1" name="Anna" />
                <Dialogue id="2" name="George" />
                <Dialogue id="3" name="Illidan" />
            </div>

            <div>
                <Message message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolores ipsum facilis accusantium molestias nemo laboriosam officiis, ducimus commodi in odit minus ex qui ratione corrupti laudantium impedit magni maxime." />
                <Message message="Is it me you looking for?" />
                <Message message="Hello?" />
            </div>
        </div>
    );
};

export default Dialogues;
