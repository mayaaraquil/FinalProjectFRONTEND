import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyloginComponent } from './spotifylogin.component';

describe('SpotifyloginComponent', () => {
  let component: SpotifyloginComponent;
  let fixture: ComponentFixture<SpotifyloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyloginComponent]
    });
    fixture = TestBed.createComponent(SpotifyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
