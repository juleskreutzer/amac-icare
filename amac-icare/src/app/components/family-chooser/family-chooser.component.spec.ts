import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyChooserComponent } from './family-chooser.component';

describe('FamilyChooserComponent', () => {
  let component: FamilyChooserComponent;
  let fixture: ComponentFixture<FamilyChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
