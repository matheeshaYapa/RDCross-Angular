import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosshowComponent } from './crosshow.component';

describe('CrosshowComponent', () => {
  let component: CrosshowComponent;
  let fixture: ComponentFixture<CrosshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
