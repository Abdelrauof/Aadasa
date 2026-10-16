import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicDate',
  standalone: true,
})
export class ArabicDatePipe implements PipeTransform {
  transform(dateString: string | undefined | null): string {
    if (!dateString) {
      return '';
    }

    try {
      const parsedDate = new Date(dateString);
      return new Intl.DateTimeFormat('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(parsedDate);
    } catch {
      return dateString;
    }
  }
}
