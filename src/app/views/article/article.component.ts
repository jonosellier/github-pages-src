import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as marked from 'marked';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articleSvc: ArticleService
  ) {}

  articleHtml: string = '';

  async ngOnInit(): Promise<void> {
    const mdText = await this.articleSvc.getArticleBySlug(
      this.route.snapshot.params.slug
    );

    this.articleHtml = marked(mdText);
  }
}
