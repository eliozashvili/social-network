import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import FriendsOnline from './Friends/Friends-Online/Friends-Online';

const Navigation = props => {
    const friendsOnline = props.friends.friendsOnline.map(friendsOnline => (
        <FriendsOnline
            key={friendsOnline.id}
            id={friendsOnline.id}
            friend={friendsOnline.name}
        />
    ));

    return (
        <nav className={classes.navigation}>
            <ul type='none'>
                <li className={classes.item}>
                    <NavLink
                        to='/news'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        News
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/profile'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/dialogue'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Dialogues
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/friends'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Friends
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/music'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Music
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/settings'
                        className={navData =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>

            {friendsOnline}
        </nav>
    );
};

export default Navigation;
