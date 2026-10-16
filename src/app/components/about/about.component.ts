import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogAuthor } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  private readonly blogService = inject(BlogService);

  authorsList: BlogAuthor[] = [];

  ngOnInit(): void {
    const posts = this.blogService.getPosts();
    const seenNames = new Set<string>();

    for (const post of posts) {
      if (post.author && !seenNames.has(post.author.name)) {
        seenNames.add(post.author.name);
        this.authorsList.push(post.author);
      }
    }
  }
}
