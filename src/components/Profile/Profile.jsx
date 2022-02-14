import "./../../App.css";
import MyPosts from "./MyPosts/MyPosts";
import classes  from "./Profile.module.css"

const Profile = () => {
  return  <div>
  <div >
    <img className={classes.imgProf} alt="" src="https://i.pinimg.com/originals/3a/0c/13/3a0c1330e307ab31efac1c61927aec9c.jpg"></img>
  </div>
  <div>
    Ava + description
  </div>
  <MyPosts />
</div>

}

export default Profile;