import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachSongsComponent } from './seach-songs.component';

describe('SeachSongsComponent', () => {
  let component: SeachSongsComponent;
  let fixture: ComponentFixture<SeachSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeachSongsComponent]
    });
    fixture = TestBed.createComponent(SeachSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
