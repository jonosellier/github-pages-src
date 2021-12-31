import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Education, Experience } from 'src/app/models/resume';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, AfterViewChecked {
  @Input() data: Experience[] | Education[] = [];

  @ViewChild('timelineContainer')
  timelineContainer!: any;

  educationData: Education[] = [];

  experienceData: Experience[] = [];

  get type() {
    return this.data[0]?.type ?? 'unknown';
  }

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'Education') {
      this.educationData = this.data as Education[];
    }
    if (this.type === 'Experience') {
      this.experienceData = this.data as Experience[];
    }
  }

  ngAfterViewChecked() {
    this.handleResize();
  }

  @HostListener('window:resize')
  handleResize() {
    const firstTimelineItem = Array.from(
      this.timelineContainer.nativeElement.children
    )[1] as HTMLElement;
    firstTimelineItem.style.marginTop =
      firstTimelineItem.getBoundingClientRect().height / -2 + 8 + 'px';
    this.timelineContainer.nativeElement.style.marginTop =
      32 + firstTimelineItem.getBoundingClientRect().height / 2 + 'px';
  }
}
