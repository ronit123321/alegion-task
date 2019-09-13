import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../action/user.actions';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.AddUser: {
      let newState = state.users;
      newState.push(action.payload);
      return {
        ...state,
        users: newState
      };
    }

    default:
      return state;
  }
};