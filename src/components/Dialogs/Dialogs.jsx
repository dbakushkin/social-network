import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/Message";

import React from "react"

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} />);

    let addMessage = () => {
        props.addMessage()
    }


    let messageOnchange = (event) => {
        let text = event.target.value
        props.messageOnchange(text);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <div>
                    <textarea onChange={messageOnchange} name="" id="" cols="20" rows="5"></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
