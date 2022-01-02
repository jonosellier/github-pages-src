import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { WritingComponent } from './views/writing/writing.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { WarpComponent } from './components/warp/warp.component';
import { ArticleComponent } from './views/article/article.component';
import { WaveBgComponent } from './components/wave-bg/wave-bg.component';
import { TimelineFadeInDirective } from './directives/timeline-fade-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WritingComponent,
    ProjectsComponent,
    TimelineComponent,
    TimelineItemComponent,
    WarpComponent,
    ArticleComponent,
    WaveBgComponent,
    TimelineFadeInDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
