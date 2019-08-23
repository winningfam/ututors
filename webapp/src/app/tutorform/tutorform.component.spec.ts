import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorformComponent } from './tutorform.component';

describe('TutorformComponent', () => {
  let component: TutorformComponent;
  let fixture: ComponentFixture<TutorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
