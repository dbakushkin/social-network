import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: "Hi, how are you?", likes: "15" },
                { id: 2, post: "It's my first post", likes: "20" },
            ],
            newPostText: ""

        },
        dialogsPage: {
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

        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}





export default store;
window.store = store;