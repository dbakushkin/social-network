let rerenderEntireTree = () => {
    console.log("State changed")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, how are you?", likes: "15"},
            {id: 2, post: "It's my first post", likes: "20"},
        ],
        newPostText: ""

    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Че как обстановка"}
        ],
        newMessagetext: "",

        dialogs: [
            {id: 1, name: "Стамеска", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 2, name: "Кум", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 3, name: "Полено", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 4, name: "Шуруповерт", img: "https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"}
        ]

    },
};
export const addPost = () => {
    let newPost = {
        id: 3, post: state.profilePage.newPostText, likes:1
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4, message: state.profilePage.newMessagetext}
        state.dialogsPage.messages.push(newMessage)
        state.dialogsPage.newMessagetext = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export let updateNewMessageText = (newText) => {
    state.profilePage.newMessagetext = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;