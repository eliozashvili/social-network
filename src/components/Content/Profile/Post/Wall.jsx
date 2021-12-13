import Post from './Post';
import classes from './Wall.module.css';

const Wall = () => {
    return (
        <div>
            <textarea
                class={classes.textarea}
                placeholder="What's on your mind?"
            ></textarea>
            <br></br>
            <button class={classes.btnPost}>Post</button>
            <Post message="Hello, World!" likesCount="1" />
            <Post
                message="Lorem ipsumdolor sit amet consectetur, adipisicing elit. Veritatis, dolores ipsum facilis accusantium molestias nemo laboriosam officiis, ducimus commodi in odit minus ex qui ratione corrupti laudantium impedit magni maxime. Lorem ipsumdolor sit amet consectetur, adipisicing elit. Veritatis, dolores ipsum facilis accusantium molestias nemo laboriosam officiis, ducimus commodi in odit minus ex qui ratione corrupti laudantium impedit magni maxime."
                likesCount="12"
            />
            <Post
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolores ipsum facilis accusantium molestias nemo laboriosam officiis, ducimus commodi in odit minus ex qui ratione corrupti laudantium impedit magni maxime."
                likesCount="69"
            />
        </div>
    );
};

export default Wall;
