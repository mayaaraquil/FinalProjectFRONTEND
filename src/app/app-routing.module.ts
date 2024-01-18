import { RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { SpotifyloginComponent } from "./components/spotifylogin/spotifylogin.component";
import { NgModule } from '@angular/core';
import { SeachSongsComponent } from './components/seach-songs/seach-songs.component';
import { LibraryComponent } from './components/library/library.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreateBlogFormComponent } from './components/create-blog-form/create-blog-form.component';
import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
    {path: '', component:HomepageComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'spotifylogin', component: SpotifyloginComponent},
    {path: 'search', component:SeachSongsComponent},
    {path: 'library', component:LibraryComponent},
    {path: 'blogs', component:BlogComponent},
    {path: 'createBlog', component:CreateBlogFormComponent},
    {path: 'video', component:VideoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};