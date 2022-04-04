import React from "react";
import { addMessageActionCreator, messageOnchangeActionCreator } from "../../../redux/dialogs-reducer";


const Textarea = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
   

    let messageOnchange = (event) => {
        let text = event.target.value
        props.dispatch(messageOnchangeActionCreator(text));
    }

    return (

        <div>
            <textarea onChange={messageOnchange}  name="" id="" cols="20" rows="5"></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Textarea