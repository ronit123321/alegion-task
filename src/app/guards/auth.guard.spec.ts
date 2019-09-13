import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { AuthGuard } from '../guards/auth.guard';
import { IUser } from '../data-model/user.class';
import { RouterTestingModule } from '@angular/router/testing';

describe('Auth Guard', () => {
    let guard: AuthGuard;
    let store: MockStore<{ users: any[] }>;

    const initialState = { users: undefined };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                AuthGuard,
                provideMockStore({ initialState }),
            ],
        });
    });

    it('should create auth guard service', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));


    it('should return false if the user state is not logged in', inject([AuthGuard], (guard: AuthGuard) => {
        store = TestBed.get(Store);
        expect(guard.canActivate()).toBeFalsy();
    }));

    // it('should return true if the user state is logged in', inject([AuthGuard], (guard: AuthGuard) => {
    //     store = TestBed.get(Store);
    //     try {
    //         store.setState({ users: [] });
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     expect(guard.canActivate()).toBeTruthy();
    // }));

});