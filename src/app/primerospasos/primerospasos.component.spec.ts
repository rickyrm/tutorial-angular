import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerospasosComponent } from './primerospasos.component';

describe('PrimerospasosComponent', () => {
  let component: PrimerospasosComponent;
  let fixture: ComponentFixture<PrimerospasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerospasosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerospasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
