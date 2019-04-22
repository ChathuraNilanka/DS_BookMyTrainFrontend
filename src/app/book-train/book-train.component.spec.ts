import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTrainComponent } from './book-train.component';

describe('BookTrainComponent', () => {
  let component: BookTrainComponent;
  let fixture: ComponentFixture<BookTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
