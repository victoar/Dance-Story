import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceGenreComponent } from './dance-genre.component';

describe('DanceGenreComponent', () => {
  let component: DanceGenreComponent;
  let fixture: ComponentFixture<DanceGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
