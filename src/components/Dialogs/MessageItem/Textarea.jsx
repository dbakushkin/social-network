import React from "react";

const Textarea = (props) => {
    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }
    let newMessageElement = React.createRef()

    let messageOnchange = () => {
        let text = newMessageElement.current.value
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: text});
    }

    return (

        <div>
            <textarea onChange={messageOnchange}  ref={newMessageElement} name="" id="" cols="20" rows="5"></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Textarea