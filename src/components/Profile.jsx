import "./../App.css";
import classes  from "./Profile.module.css"

const Profile = () => {
  return  <div className={classes.content}>
  <div >
    <img alt="" src="https://i.pinimg.com/originals/3a/0c/13/3a0c1330e307ab31efac1c61927aec9c.jpg"></img>
  </div>
  <div>
    Ava + description
  </div>
  <div>
    My posts
    <div>
      New posts
    </div>
    <div className={classes.posts}>
      <div className={classes.item}>
        post 1
      </div>
      <div className={classes.item}>
        post 2
      </div>
    </div>
  </div>
</div>

}

export default Profile;