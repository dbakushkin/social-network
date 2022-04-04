const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Че как обстановка" }
    ],
    newMessagetext: "",

    dialogs: [
        { id: 1, name: "Стамеска", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" },
        { id: 2, name: "Кум", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" },
        { id: 3, name: "Полено", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" },
        { id: 4, name: "Шуруповерт", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png" }
    ]

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4, message: state.newMessagetext
            }
            state.messages.push(newMessage)
            state.newMessagetext = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagetext = action.newText;
            return state;
        default:
            return state
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const messageOnchangeActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
)

export default dialogsReducer