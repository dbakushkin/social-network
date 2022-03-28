import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";
import Textarea from "./MessageItem/Textarea";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id = {d.id} img={d.img} /> );
    let messagesElement = props.dialogsPage.messages.map( m =>  <Message message = {m.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <Textarea dispatch = {props.dispatch} />
            </div>

        </div>
    )
}

export default Dialogs
