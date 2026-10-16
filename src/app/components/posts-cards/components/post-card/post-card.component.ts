import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../../../models/blog.model';
import { ArabicDatePipe } from '../../../../pipes/arabic-date.pipe';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, ArabicDatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input({ required: true }) post!: BlogPost;
  @Input() isListView: boolean = false;
}
