import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../models/post.models';
import { PostService } from '../services/post.services';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent implements OnInit {

  posts = signal<Post[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  
  

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() : void{
    this.loading.set(true)
    this.error.set(null)
    this.postService.getPosts().subscribe({
      next: (data: Post[])=> {
        this.posts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Erro ao carregar");
        this.loading.set(false);
      }
    });
  }
}