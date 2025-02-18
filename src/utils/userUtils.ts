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