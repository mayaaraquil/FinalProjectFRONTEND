import { AuthService, User } from '@auth0/auth0-angular';
import { UserService } from 'src/app/services/user.service';
import { EndUser } from 'src/app/models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileJson: User | null | undefined = null; 

  userId: string | undefined = undefined;

  userProfiles: EndUser[] = [];

  user :EndUser = {userId: -1, authName: "", username: "", profilePicture: "", bio: ""};

  base64:any;

  showing: boolean = false;

  userCreation = this.fb.group({
    username: ['', Validators.required],
    profilePicture: [null, Validators.required],
    bio: ['', Validators.required]
  });

  updateUser = this.fb.group({
    username: ['', Validators.required],
    profilePicture: [null, Validators.required],
    bio: ['', Validators.required]
  });
  constructor( public auth: AuthService, public userservice: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => { 
        (this.profileJson = profile),
        (this.userId = this.profileJson?.sub)
        this.userservice.getUsers().subscribe(
          (user) => {
            (this.userProfiles = user),
            this.hasProfile(this.userProfiles)
          }
        )
      }
    );

  }

  onSubmit(){
    if(this.userCreation.valid){
      const formData:EndUser = this.userCreation.getRawValue() as unknown as EndUser;

      formData.authName= this.userId as string;
      formData.profilePicture = this.base64;
      

      this.userservice.createUser(formData).subscribe();
    }
  }
  
  onFileSelect(event: any):void{
    let targetEvent = event.target;

    let file:File = targetEvent.files[0];
    let fileReader: FileReader = new FileReader();

    fileReader.onload = (e) => {
      this.base64 = fileReader.result;
    }
    fileReader.readAsDataURL(file);
 }

 hasProfile(profileList: EndUser[]){

  this.user = profileList.filter(user => user.authName === this.userId)[0];
  }

  show(){
      this.showing = !this.showing
  }

  onClick(){
     const formData: EndUser = this.updateUser.getRawValue() as unknown as EndUser;

     if(formData.username !== ""){
        this.user.username = formData.username
     }

     if(formData.profilePicture !== null){
      this.user.profilePicture = this.base64;
     }

     if(formData.bio !== ""){
      this.user.bio = formData.bio;
     }
     this.userservice.updateUser(this.user.userId, this.user).subscribe();
  }

  deleteProfile():void{
    this.userservice.deleteUser(this.user.userId).subscribe();
  }
}
