import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User } from '@state/user/user.model';
import { UserFormComponent } from './user-form.component';

function newEvent(eventName: string, bubbles = false, cancelable = false) {
  const evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should patch values into the form', () => {
    const user = {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    };

    component.ngOnChanges({
      user: new SimpleChange(null, user, true)
    });

    expect(component.form.value).toEqual({
      first_name: user.first_name,
      last_name: user.last_name
    });
  });

  it('should emit the userChange event when submitted', () => {
    const user = {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    };
    const first_name = 'Brian';
    const first_nameDebugEl = fixture.debugElement.query(
      By.css('input[formControlName="first_name"]')
    );
    const first_nameEl = first_nameDebugEl.nativeElement as HTMLInputElement;
    const buttonDebugEl = fixture.debugElement.query(By.css('button'));

    fixture.detectChanges();

    let updatedUser: User;
    component.userChange.subscribe(u => (updatedUser = u));

    component.user = user;
    component.ngOnChanges({
      user: new SimpleChange(null, user, true)
    });

    first_nameEl.value = first_name;
    first_nameEl.dispatchEvent(newEvent('input'));

    buttonDebugEl.triggerEventHandler('click', null);

    expect(updatedUser).toEqual({
      ...user,
      first_name
    });
  });
});
