export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogCategory {
  name: string;
  count: number;
  color: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: BlogAuthor;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  youtube: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: SocialLinks;
}

export interface BlogDataResponse {
  posts: BlogPost[];
  categories: BlogCategory[];
  siteInfo: SiteInfo;
}
