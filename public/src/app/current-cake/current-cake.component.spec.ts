import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCakeComponent } from './current-cake.component';

describe('CurrentCakeComponent', () => {
  let component: CurrentCakeComponent;
  let fixture: ComponentFixture<CurrentCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
