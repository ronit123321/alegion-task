import { User } from '@state/user/user.model';
import {
  AddUser,
  AddUserFail,
  AddUserSuccess,
  AddUsersSuccess,
  LoadUser,
  LoadUserFail,
  LoadUserSuccess,
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
  SelectUser,
  UpdateUser,
  UpdateUserFail,
  UpdateUserSuccess,
  UpdateUsers,
  UpdateUsersSuccess
} from './user.actions';
import { initialState, reducer } from './user.reducer';

describe('User Reducer', () => {
  const anakin: User = {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "anakin",
    last_name: "test",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[User] Add User', () => {
    it('should toggle loading state', () => {
      const action = new AddUser({ user: anakin });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Add User Success', () => {
    it('should add a user to state', () => {
      const action = new AddUserSuccess({ user: anakin });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: {
          [anakin.id]: anakin
        },
        ids: [anakin.id],
        loading: false
      });
    });
  });

  describe('[User] Add User Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new AddUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Load User', () => {
    it('should toggle loading state', () => {
      const action = new LoadUser({ id: anakin.id });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Load User Success', () => {
    it('should load a user to state', () => {
      const action = new LoadUserSuccess({ user: anakin });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: {
          [anakin.id]: anakin
        },
        ids: [anakin.id],
        loading: false
      });
    });
  });

  describe('[User] Load User Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Load Users', () => {
    it('should toggle loading state', () => {
      const action = new LoadUsers();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Load Users Success', () => {
    it('should add all users to state', () => {
      const users = [anakin];
      const action = new LoadUsersSuccess({ users });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: users.reduce(
          (entityMap, user) => ({
            ...entityMap,
            [user.id]: user
          }),
          {}
        ),
        ids: users.map(user => user.id),
        loading: false
      });
    });
  });

  describe('[User] Load Users Fail', () => {
    it('should update error in state', () => {
      const users = [anakin];
      const error = new Error();
      const action = new LoadUsersFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Update User', () => {
    it('should toggle loading state', () => {
      const action = new UpdateUser({
        user: { ...anakin, first_name: 'Darth', last_name: 'Vader' }
      });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Update User Success', () => {
    it('should update user in state', () => {
      const updatedUser: User = {
        ...anakin,
        first_name: 'Darth',
        last_name: 'Vader'
      };
      const action = new UpdateUserSuccess({
        update: {
          id: anakin.id,
          changes: updatedUser
        }
      });

      const state = reducer(initialState, new AddUserSuccess({ user: anakin }));
      expect(state).toEqual({
        ...initialState,
        entities: {
          [anakin.id]: anakin
        },
        ids: [anakin.id],
        loading: false
      });

      const result = reducer(state, action);
      expect(result).toEqual({
        ...state,
        entities: {
          ...state.entities,
          [anakin.id]: updatedUser
        },
        ids: [...state.ids],
        loading: false
      });
    });
  });

  describe('[User] Update User Fail', () => {
    it('should update error in state', () => {
      const users = [anakin];
      const error = new Error();
      const action = new UpdateUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Update Users', () => {
    it('should toggle loading state', () => {
      const action = new UpdateUsers({
        users: [{ ...anakin, first_name: 'Darth', last_name: 'Vader' }]
      });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Update Users Success', () => {
    it('should add all users to state', () => {
      const senator = {
        id: 88,
        email: "lindsay.ferguson@reqres.in",
        first_name: "senator",
        last_name: "senator",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
      };
      const vader = {
        ...anakin,
        first_name: 'Darth',
        last_name: 'Vader'
      };
      const sidious = {
        ...senator,
        first_name: 'Darth',
        last_name: 'Sidious'
      };
      const originalUsers = [anakin, senator];
      const updatedUsers = [vader, sidious];

      const state = reducer(
        initialState,
        new AddUsersSuccess({
          users: originalUsers
        })
      );

      const action = new UpdateUsersSuccess({
        update: [
          {
            id: anakin.id,
            changes: vader
          },
          {
            id: senator.id,
            changes: sidious
          }
        ]
      });
      const result = reducer(state, action);

      expect(result).toEqual({
        ...state,
        entities: updatedUsers.reduce(
          (entityMap, user) => ({
            ...entityMap,
            [user.id]: user
          }),
          {}
        ),
        ids: updatedUsers.map(user => user.id),
        loading: false
      });
    });
  });

  describe('[User] Select User', () => {
    it('should set the selectedUserId property in state', () => {
      const action = new SelectUser({ id: anakin.id });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        selectedUserId: anakin.id
      });
    });
  });
});
