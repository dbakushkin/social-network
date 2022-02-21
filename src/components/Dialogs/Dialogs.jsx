import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id = {d.id} /> );
    let messagesElement = props.messages.map( m =>  <Message message = {m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs
