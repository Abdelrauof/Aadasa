import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog.model';
import { ArabicDatePipe } from '../../pipes/arabic-date.pipe';

interface ArticleSection {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink, ArabicDatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  post?: BlogPost;
  articleSections: ArticleSection[] = [];
  relatedArticles: BlogPost[] = [];
  copiedLink: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.loadPostData(slug);
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  private loadPostData(slug: string): void {
    const found = this.blogService.getPostBySlug(slug);

    if (!found) {
      this.router.navigate(['/404'], { replaceUrl: true });
      return;
    }

    this.post = found;
    this.articleSections = this.extractSections(found.content);
    this.relatedArticles = this.blogService.getRelatedPosts(found.category, found.id, 3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private extractSections(markdown: string): ArticleSection[] {
    if (!markdown) return [];

    const rawBlocks = markdown.split(/##\s+/);
    const introduction = rawBlocks.shift()?.trim();
    const result: ArticleSection[] = [];

    if (introduction) {
      result.push({
        title: 'مقدمة المقال',
        content: introduction
      });
    }

    for (const block of rawBlocks) {
      const splitIndex = block.indexOf('\n');
      if (splitIndex !== -1) {
        const title = block.slice(0, splitIndex).trim();
        const content = block.slice(splitIndex + 1).trim();
        result.push({ title, content });
      } else {
        result.push({ title: block.trim(), content: '' });
      }
    }

    return result;
  }

  copyArticleUrl(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      this.copiedLink = true;
      setTimeout(() => (this.copiedLink = false), 2500);
    }
  }
}
