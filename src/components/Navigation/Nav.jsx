import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul type="none">
                <li className={classes.item}>
                    <NavLink
                        to="/profile"
                        className={(navData) =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        My Profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/dialogue"
                        className={(navData) =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Dialogues
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/news"
                        className={(navData) =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        News
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/music"
                        className={(navData) =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Music
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/settings"
                        className={(navData) =>
                            navData.isActive ? classes.activeLink : classes.item
                        }
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
