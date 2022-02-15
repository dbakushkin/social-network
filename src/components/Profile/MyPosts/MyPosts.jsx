import classes  from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return  <div className={classes.postsBlock}>
   <h2> My posts</h2>
    <div>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>Add post</button>
      </div>
    </div>
    <div className={classes.posts}>
     <Post message = "Hi, how are you?" likeCount = "15" />
     <Post message = "It's my first post" likeCount = "20"/>

    </div>
  </div>

}

export default MyPosts;