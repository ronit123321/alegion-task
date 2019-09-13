import { IUser } from 'src/app/data-model/user.class';

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}

export const initialUserState: IUserState = {
    users : null,
    selectedUser : null
}