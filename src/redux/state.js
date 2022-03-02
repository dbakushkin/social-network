import classes from "../components/Profile/ProfileInfo/ProfileInfo.module.css";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, how are you?", likes: "15"},
            {id: 2, post: "It's my first post", likes: "20"}
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Че как обстановка"}
        ],
        dialogs: [
            {id: 1, name: "Стамеска", img:"https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 2, name: "Кум", img:"https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 3, name: "Полено", img:"https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"},
            {id: 4, name: "Шуруповерт",img:"https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png"}
        ]

    },

};

export default state;