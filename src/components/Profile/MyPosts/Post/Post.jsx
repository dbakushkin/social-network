import classes from "./Post.module.css"
import React from "react"

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img alt="" src="https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" />
        {props.message}
        
      <div>
        <span>Like</span>{props.likeCount}
      </div>
    </div>
  )
}
export default Post;