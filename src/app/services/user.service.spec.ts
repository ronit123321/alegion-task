
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { IUser } from '../data-model/user.class';
import { of } from 'rxjs';

describe('UserService', () => {
  
  let userService: UserService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
        HttpClient
      ],
    });

    
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(<any> httpClientSpy);

  });

  it('should create user service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should issue a request', async(inject([UserService, HttpClient, HttpTestingController], (service: UserService, http: HttpClient, backend: HttpTestingController) => {
    let response = http.get('http://localhost:5000/users');

    setTimeout(() => {
      expect(response).toBeTruthy();
    }, 3000);

  })));


  it(`should return Observable<IUser>`, async(inject([UserService, HttpClient, HttpTestingController], (service: UserService, http: HttpClient, backend: HttpTestingController) => {

    const expectedUsers: IUser[] = [{
      id: 1,
      first_name: "Dom",
      last_name: "Balentyne",
      email: "dbalentyne0@cloudflare.com",
      avatar: ""
    },
    {
      id: 2,
      first_name: "Xerxes",
      last_name: "Turone",
      email: "xturone1@posterous.com",
      avatar: ""
    }];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    userService.getUsers().subscribe( users => expect(users).toEqual(users, 'expected users'), fail);
   
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  })));


});
