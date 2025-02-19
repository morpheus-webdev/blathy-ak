export interface ILoggedInUser {
    username: string;
    img: string;
    isPremiumUser: boolean;
}

export const defaultILoggedInUser: ILoggedInUser = {
    username: '',
    img: '',
    isPremiumUser: false
}

//for storing all users (in the backend)

export interface IRegisteredUser {
    username: string;
    password: string;
    img: string;
    isPremiumUser: boolean;
}

export const defaultRegisteredUser: IRegisteredUser = {
    username: '',
    password: '',
    img: '',
    isPremiumUser: false
}

export const allUsers: IRegisteredUser[] = [//ilyet nem csinálunk a valóságban
    {
        username: 'pistike200',
        password: 'kiskutya',
        img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/Shadow-The-Hedgehog-Game-Art.jpg',
        isPremiumUser: false
    },
    {
        username: 'edgelord1000',
        password: 'hellokitty',
        img: 'https://news.harvard.edu/wp-content/uploads/2014/10/hello-kitty-wallpaper-37_605.jpg',
        isPremiumUser: true
    }
]