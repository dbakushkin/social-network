import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink  to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Стамеска" id = "1" />
                <DialogItem name="Кум" id = "2" />
                <DialogItem name="Полено" id = "3" />
                <DialogItem name="Шуруповерт" id = "4" />

            </div>
            <div className={classes.messages}>
                <Message message = "Hi" />
                <Message message = "How are you" />
                <Message message = "Yo" />
            </div>
        </div>
    )
}

export default Dialogs
