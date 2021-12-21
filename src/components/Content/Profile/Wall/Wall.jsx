import Post from './Post/Post';
import classes from './Wall.module.css';
import React from 'react';

const Wall = props => {
    const postElements = props.posts.map(postArg => (
        <Post
            key={postArg.id}
            message={postArg.postMessage}
            likesCount={postArg.likesCount}
        />
    ));
    // Creates reference to element
    const newPostElement = React.createRef();

    const addPost = () => {
        const postText = newPostElement.current.value;
        alert(postText);
    };

    return (
        <div>
            <textarea
                ref={newPostElement}
                className={classes.textarea}
                placeholder="What's on your mind?"
            ></textarea>
            <br></br>
            <button onClick={addPost} className={classes.btnPost}>
                Post
            </button>

            {postElements}
        </div>
    );
};

export default Wall;
