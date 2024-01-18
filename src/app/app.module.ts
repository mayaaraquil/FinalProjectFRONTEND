import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogComponent } from './components/blog/blog.component';
import { CreateBlogFormComponent } from './components/create-blog-form/create-blog-form.component';

import { SpotifyloginComponent } from './components/spotifylogin/spotifylogin.component';
import { SeachSongsComponent } from './components/seach-songs/seach-songs.component';
import { LibraryComponent } from './components/library/library.component';
import { VideoComponent } from './components/video/video.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileComponent,
    AuthButtonComponent,

    BlogComponent,
    CreateBlogFormComponent,
    SpotifyloginComponent,
    SeachSongsComponent,
    LibraryComponent,
    VideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "finalproject120231211204040.azurewebsites.net"
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
