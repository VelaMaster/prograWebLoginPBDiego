import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleteAutoActiveFirstOptionExample;
  let fixture: ComponentFixture<AutocompleteAutoActiveFirstOptionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteAutoActiveFirstOptionExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteAutoActiveFirstOptionExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
