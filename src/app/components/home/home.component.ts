import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost, BlogCategory } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { PostCardComponent } from '../posts-cards/components/post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly blogService = inject(BlogService);

  featuredArticles: BlogPost[] = [];
  categoriesList: BlogCategory[] = [];
  latestArticles: BlogPost[] = [];

  ngOnInit(): void {
    this.featuredArticles = this.blogService.getFeaturedPosts(3);
    this.categoriesList = this.blogService.getCategories();
    this.latestArticles = this.blogService.getRecentPosts(3);
  }

  getCategoryIconClass(name: string): string {
    switch (name) {
      case 'إضاءة':
        return 'fa-solid fa-sun text-amber-400';
      case 'بورتريه':
        return 'fa-solid fa-user text-orange-400';
      case 'مناظر طبيعية':
        return 'fa-solid fa-mountain-sun text-emerald-400';
      case 'تقنيات':
        return 'fa-solid fa-sliders text-cyan-400';
      default:
        return 'fa-solid fa-camera text-orange-400';
    }
  }
}
