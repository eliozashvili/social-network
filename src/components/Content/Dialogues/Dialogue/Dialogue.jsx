import classes from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';

const Dialogue = props => {
    let path = '/dialogue/' + props.id;
    return (
        <div className={classes.dialogue}>
            <NavLink
                to={path}
                className={dialogueData =>
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

export default Dialogue;
