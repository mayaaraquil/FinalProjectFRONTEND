import { PostTypes } from "./post-types";
import {Blog}

export interface Comments {
    CommentId: number;
    CommentText: string;
    UserId: number;
    PostType: PostTypes;
    BlogId?: number;
    PlaylistId?: number;
    SongId?: number;
    VideoId?: number;
}
