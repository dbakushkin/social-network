import React from "react"
import { addMessageActionCreator, messageOnchangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }


    let messageOnchange = (text) => {

        props.store.dispatch(messageOnchangeActionCreator(text));
    }

    return <Dialogs dialogsPage={state} messageOnchange={messageOnchange} addMessage={addMessage} />
}

export default DialogsContainer
