import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';


describe('AppComponent', () => {

  let fixture: ComponentFixture<any>;
  let component;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockNewUserFormComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: UserService, useClass: MockUser },
        provideMockStore({
          initialState: {
            users: {}
          }
        })
      ],
    }).compileComponents().then(() => {
      //userService = TestBed.get(UserService);
    });
    userService = TestBed.get(UserService);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});


@Component({
  selector: 'new-user-form',
  template: ''
})
class MockNewUserFormComponent {
}

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {
}

class MockUser {}