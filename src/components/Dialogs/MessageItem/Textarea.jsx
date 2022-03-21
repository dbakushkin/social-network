import React from "react";

const Textarea = (props) => {
    let addMessage = () => {
        props.addMessage()
    }
    let newMessageElement = React.createRef()

    let messageOnchange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text);
    }

    return (

        <div>
            <textarea onChange={messageOnchange}  ref={newMessageElement} name="" id="" cols="20" rows="5"></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Textarea