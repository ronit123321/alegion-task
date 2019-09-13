import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserFormComponent } from './new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

describe('NewUserFormComponent', () => {
  let component: NewUserFormComponent;
  let fixture: ComponentFixture<NewUserFormComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        ReactiveFormsModule
    ],
      declarations: [ NewUserFormComponent ],
      providers: [
        { provide: UserService, useClass: MockUser },
      ]
    }).compileComponents();
    userService = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockUser {


}