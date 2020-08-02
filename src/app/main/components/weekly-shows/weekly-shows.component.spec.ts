import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyShowsComponent } from './weekly-shows.component';

describe('WeeklyShowsComponent', () => {
  let component: WeeklyShowsComponent;
  let fixture: ComponentFixture<WeeklyShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
