import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { AddUser } from '@state/user/user.actions';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent, UserFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromRoot.reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the AddUser action when onUserChange is invoked', () => {
    const user = {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    };
    const action = new AddUser({ user });
    const spy = jest.spyOn(store, 'dispatch');

    fixture.detectChanges();

    component.onUserChange(user);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
