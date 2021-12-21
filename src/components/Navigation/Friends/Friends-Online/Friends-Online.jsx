import classes from './Friends-Online.module.css';
import { NavLink } from 'react-router-dom';

const FriendsOnline = props => {
    let path = '/friends/' + props.id;
    return (
        <div className={classes.wrapper}>
            <img
                className={classes.friendsProfilePicture}
                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                alt='friends img did not load'
            />
            <span>
                <NavLink to={path} className={classes.onlineFriends}>
                    {props.friend}
                </NavLink>
            </span>
        </div>
    );
};

export default FriendsOnline;
