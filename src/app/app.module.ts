import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducer';
import { UserEffects } from './store/effects/user.effects';

import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './components/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HeaderComponent } from './components/header/header.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserItemComponent,
    HeaderComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UsersListComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserItemComponent,
    HeaderComponent,
    NewUserFormComponent
  ]
})
export class AppModule { }
