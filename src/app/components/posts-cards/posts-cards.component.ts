import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPost, BlogCategory } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { PostCardComponent } from './components/post-card/post-card.component';

export type Post = BlogPost;
export type Category = BlogCategory;

@Component({
  selector: 'app-posts-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, PostCardComponent],
  templateUrl: './posts-cards.component.html',
  styleUrl: './posts-cards.component.css'
})
export class PostsCardsComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  @ViewChild('searchInput') searchInputElement?: ElementRef<HTMLInputElement>;

  categories: BlogCategory[] = [];
  allPosts: BlogPost[] = [];

  searchQuery: string = '';
  selectedCategoryName: string | null = null;
  currentPage: number = 1;
  readonly pageSize: number = 6;
  isListView: boolean = false;

  ngOnInit(): void {
    this.categories = this.blogService.getCategories();
    this.allPosts = this.blogService.getPosts();

    this.route.queryParamMap.subscribe((params) => {
      const categoryFromUrl = params.get('category');
      if (categoryFromUrl) {
        const found = this.categories.some((c) => c.name === categoryFromUrl);
        this.selectedCategoryName = found ? categoryFromUrl : null;
      } else {
        this.selectedCategoryName = null;
      }
      this.currentPage = 1;
    });
  }

  get filteredPosts(): BlogPost[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.allPosts.filter((post) => {
      const matchesCategory = !this.selectedCategoryName || post.category === this.selectedCategoryName;
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }

  get paginatedPosts(): BlogPost[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
  }

  selectCategory(categoryName: string | null): void {
    this.selectedCategoryName = categoryName;
    this.currentPage = 1;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: categoryName ? { category: categoryName } : {},
      queryParamsHandling: categoryName ? 'merge' : undefined
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  }

  toggleView(isList: boolean): void {
    this.isListView = isList;
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategoryName = null;
    this.currentPage = 1;
    if (this.searchInputElement) {
      this.searchInputElement.nativeElement.value = '';
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });
  }
}
