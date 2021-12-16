import Wall from './Wall/Wall';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img
                className={classes.image}
                src='https://64.media.tumblr.com/1150abb637c2054de5e40e672fc48760/6b4d0935965b4e1f-d1/s1280x1920/f9e5f2fce7b8a395243440ee1c1ef2929cedb510.jpg'
                alt="img didn't load"
            />
            <Wall />
        </div>
    );
};

export default Profile;
