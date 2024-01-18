import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  videos: Video[] = [];
  newVideoUrl: string = '';

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    // Fetch all videos
    this.videoService.getVideos()
      .subscribe(response => this.videos = response,
        error => console.error('Error fetching videos:', error));
  }

  handleVideoSubmit(): void {
    // Create a new video post
    const newVideo: Video = {
      VideoId: 0,  // It will be assigned by the server
      UserId: 1,  // Replace with the actual user ID
      VideosUrl: this.extractVideoId(this.newVideoUrl),
      AuthId: 4  // Replace with the actual AuthId
    };

    this.videoService.createVideo(newVideo)
      .subscribe(response => {
        this.videos.push(response);
        this.newVideoUrl = '';
      }, error => console.error('Error creating video:', error));
  }

  handleDeleteVideo(id: number): void {
    // Delete a video post
    this.videoService.deleteVideo(id)
      .subscribe(() => this.videos = this.videos.filter(video => video.VideoId !== id),
        error => console.error('Error deleting video:', error));
  }

  private extractVideoId(url: string): string {
    // Extract the video ID from a YouTube URL
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }
}

