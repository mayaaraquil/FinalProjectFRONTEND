import { RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { SpotifyloginComponent } from "./components/spotifylogin/spotifylogin.component";
import { NgModule } from '@angular/core';
import { SeachSongsComponent } from './components/seach-songs/seach-songs.component';
import { LibraryComponent } from './components/library/library.component';


const routes: Routes = [
    {path: 'profile', component:ProfileComponent},
    {path: 'spotifylogin', component: SpotifyloginComponent},
    {path: 'search', component:SeachSongsComponent},
    {path: 'library', component:LibraryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};