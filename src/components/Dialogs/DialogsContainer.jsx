import React from "react"
import { connect } from "react-redux";
import { addMessageActionCreator, messageOnchangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        messageOnchange:(text) => {dispatch(messageOnchangeActionCreator(text))},
        addMessage:() => {dispatch(addMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
