import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.imgProf} alt=""
                     src="https://i.pinimg.com/originals/3a/0c/13/3a0c1330e307ab31efac1c61927aec9c.jpg"></img>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;