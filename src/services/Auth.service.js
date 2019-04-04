import { userApi } from "./Api.service";

export const logIn = (user) => {
    return userApi.getUser(user).then(user => user.data);
}

export const logOut = () => {

}

export const signUp = () => {

}