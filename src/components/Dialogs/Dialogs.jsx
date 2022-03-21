import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";
import Textarea from "./MessageItem/Textarea";

const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id = {d.id} img={d.img} /> );
    let messagesElement = props.state.messages.map( m =>  <Message message = {m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <Textarea addMessage= {props.addMessage} updateNewMessageText = {props.updateNewMessageText} />
            </div>

        </div>
    )
}

export default Dialogs
