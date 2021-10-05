import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpComponent } from './warp.component';

describe('WarpComponent', () => {
  let component: WarpComponent;
  let fixture: ComponentFixture<WarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
