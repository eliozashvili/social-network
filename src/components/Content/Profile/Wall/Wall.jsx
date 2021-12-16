import { messageInPost } from './../../../../index';
import Post from './Post/Post';
import classes from './Wall.module.css';

const Wall = () => {
    const postElements = messageInPost.map(postArg => (
        <Post
            key={postArg.id}
            message={postArg.postMessage}
            likesCount={postArg.likesCount}
        />
    ));

    return (
        <div>
            <textarea
                className={classes.textarea}
                placeholder="What's on your mind?"
            ></textarea>
            <br></br>
            <button className={classes.btnPost}>Post</button>

            {postElements}
        </div>
    );
};

export default Wall;
