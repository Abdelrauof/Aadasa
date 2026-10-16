import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'عدسة | الرئيسية'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/blog/blog.component').then((c) => c.BlogComponent),
        title: 'عدسة | المقالات'
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./components/post/post.component').then((c) => c.PostComponent),
        title: 'عدسة | تفاصيل المقال'
      }
    ]
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then((c) => c.AboutComponent),
    title: 'عدسة | من نحن'
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/privacy.component').then((c) => c.PrivacyComponent),
    title: 'عدسة | سياسة الخصوصية'
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./components/terms/terms.component').then((c) => c.TermsComponent),
    title: 'عدسة | شروط الاستخدام'
  },
  {
    path: '404',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then((c) => c.NotFoundComponent),
    title: 'عدسة | الصفحة غير موجودة'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then((c) => c.NotFoundComponent),
    title: 'عدسة | 404'
  }
];
