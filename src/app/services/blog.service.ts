import { Injectable } from '@angular/core';
import rawBlogData from '../../../public/assets/data/posts.json';
import {
  BlogPost,
  BlogCategory,
  BlogDataResponse,
  SiteInfo
} from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly _data: BlogDataResponse = rawBlogData as unknown as BlogDataResponse;
  private readonly _posts: BlogPost[] = this._data.posts ?? [];
  private readonly _categories: BlogCategory[] = this._data.categories ?? [];
  private readonly _siteInfo: SiteInfo = this._data.siteInfo;

  public getPosts(): BlogPost[] {
    return [...this._posts];
  }

  public getPostBySlug(slug: string): BlogPost | undefined {
    return this._posts.find((p) => p.slug === slug);
  }

  public getCategories(): BlogCategory[] {
    return [...this._categories];
  }

  public getFeaturedPosts(limit: number = 3): BlogPost[] {
    return this._posts.filter((p) => p.featured).slice(0, limit);
  }

  public getRecentPosts(limit: number = 3): BlogPost[] {
    return this._posts.slice(0, limit);
  }

  public getRelatedPosts(categoryName: string, currentId: number, limit: number = 3): BlogPost[] {
    return this._posts
      .filter((post) => post.category === categoryName && post.id !== currentId)
      .slice(0, limit);
  }

  public getSiteInfo(): SiteInfo {
    return this._siteInfo;
  }
}
