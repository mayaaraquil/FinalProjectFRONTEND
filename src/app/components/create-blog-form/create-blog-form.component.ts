import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { HttpClient } from '@angular/common/http';
import { BlogCreator } from 'src/app/models/blog-creator';

@Component({
  selector: 'app-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styleUrls: ['./create-blog-form.component.css']
})
export class CreateBlogFormComponent {
  @Output() blogSave: EventEmitter<Blog>=new EventEmitter<Blog>();

  newBlog: Blog ={
    BlogId:0,
    BlogTitle:'',
    BlogContent:'',
    UserId:''
  };
  constructor(private blogService: BlogService, private client:HttpClient ){}
  submitBlog(){
    this.blogService.createBlogPost(this.newBlog)
    .subscribe((addedBlog:Blog| any )=>{
      this.blogSave.emit(addedBlog);

      this.newBlog={
        BlogId:0,
        BlogTitle:'',
        BlogContent:'',
        UserId:''
      };
    });
  }
}
