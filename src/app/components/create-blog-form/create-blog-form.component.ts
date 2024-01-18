import { Component } from '@angular/core';

import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

import { BlogCreator } from 'src/app/models/blog-creator';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styleUrls: ['./create-blog-form.component.css']
})
export class CreateBlogFormComponent {
  newBlog: Blog = {BlogId: 0, blogTitle: "", blogContent: "", UserId: ""};

  blogForm = this.fb.group({
    blogTitle: ['', Validators.required],
    blogContent: ['', Validators.required]
  })
  constructor(private blogService: BlogService, private fb:FormBuilder){}
 
  submitBlog(){

    const formData: BlogCreator = this.blogForm.getRawValue() as unknown as BlogCreator;
    console.log(formData)
    this.newBlog.blogTitle = formData.blogTitle;
    this.newBlog.blogContent = formData.blogContent;
    this.blogService.createBlogPost(this.newBlog).subscribe()
 
  }
}
