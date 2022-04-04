import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likes} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let postOnChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return <div className={classes.postsBlock}>
        <h2> My posts</h2>
        <div>
            <div>
                <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>

}

export default MyPosts;