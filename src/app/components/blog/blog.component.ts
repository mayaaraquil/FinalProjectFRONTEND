import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs() :void{
    this.blogService.getAllBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
      console.log(this.blogs)
    });
  }

  createBlog(blog: Blog):void {
    this.blogService.createBlogPost(blog).subscribe(() => {
      
      this.loadBlogs();
    });
  }

  deleteBlog(blogId: number):void {
    this.blogService.deleteBlogPost(blogId).subscribe(() => {
      this.loadBlogs();
    });
  }
}
