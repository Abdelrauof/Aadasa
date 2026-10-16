import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogCategory } from '../../models/blog.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private blogService = inject(BlogService);
  categories: BlogCategory[] = this.blogService.getCategories();
  currentYear: number = new Date().getFullYear();
}
