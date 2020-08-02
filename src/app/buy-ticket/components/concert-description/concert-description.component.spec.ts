import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertDescriptionComponent } from './concert-description.component';

describe('ConcertDescriptionComponent', () => {
  let component: ConcertDescriptionComponent;
  let fixture: ComponentFixture<ConcertDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
