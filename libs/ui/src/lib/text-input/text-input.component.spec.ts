import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TextInputComponent } from './text-input.component'

describe('TextInputComponent', () => {
  let component: TextInputComponent
  let fixture: ComponentFixture<TextInputComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent)
    component = fixture.componentInstance
    component.hint = 'Hint'
    fixture.detectChanges()
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  describe('text input', () => {
    let inputEl
    beforeEach(() => {
      fixture.detectChanges()
      inputEl = fixture.nativeElement.querySelector('input')
    })
    it('emits the value on a change event', () => {
      let emitted
      component.change.subscribe((v) => (emitted = v))
      inputEl.value = 'Aaabcd'
      inputEl.dispatchEvent(new Event('change'))
      expect(emitted).toBe('Aaabcd')
    })
    it('emits the value on an input event', () => {
      let emitted
      component.change.subscribe((v) => (emitted = v))
      inputEl.value = 'Aaabcd'
      inputEl.dispatchEvent(new Event('input'))
      expect(emitted).toBe('Aaabcd')
    })
    it('emits only unique values', () => {
      let emittedCount = 0
      component.change.subscribe(() => emittedCount++)
      inputEl.value = 'Aaabcd'
      inputEl.dispatchEvent(new Event('input'))
      inputEl.value = 'Aaabcd'
      inputEl.dispatchEvent(new Event('input'))
      inputEl.value = 'bbb'
      inputEl.dispatchEvent(new Event('input'))
      expect(emittedCount).toBe(2)
    })
  })
})
