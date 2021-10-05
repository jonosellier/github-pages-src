import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  async getArticleBySlug(slug: string): Promise<string> {
    return this.http
      .get(window.location.origin + '/assets/articles/' + slug + '.md', {
        responseType: 'text',
      })
      .toPromise() as Promise<string>;
  }
}
