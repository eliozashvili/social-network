import classes from './Post.module.css';

const Post = props => {
    return (
        <div className={classes.post}>
            <div>
                <img
                    src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                    alt="Avatar placeholder didn't load"
                />
                <div className={classes.postMessage}>{props.message}</div>
            </div>
            <div className={classes.likesBlock}>
                <span
                    className='material-icons'
                    style={{ color: 'rgb(40, 40, 40)' }}
                >
                    thumb_up_alt
                </span>
                <span className={classes.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
