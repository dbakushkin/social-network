import classes from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" />
        {props.message}
      <div>
        <span>Like{props.likeCount}</span>
      </div>
    </div>
  )

}

export default Post;