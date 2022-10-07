import { Highlightable } from '@angular/cdk/a11y';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { SelectService } from '../prg-select.service';

@Component({
  selector: 'prg-option',
  templateUrl: './prg-option.component.html',
  styleUrls: ['./prg-option.component.scss'],
})
export class SelectOptionComponent implements Highlightable {
  @Input() value: string;
  @Input() ariaLabel: string;

  @HostBinding('class.active') active = false;

  @HostBinding('class.selected')
  public get selected(): boolean {
    return this.selectService.getParent().selectedOption === this;
  }

  @HostListener('click', ['$event']) onSelect(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.selectService.getParent().onSelect(this);
  }

  constructor(
    private elementRef: ElementRef,
    private selectService: SelectService
  ) { }

  setActiveStyles(): void {
    this.focus();
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }

  getLabel(): string {
    return this.value;
  }

  focus(options?: FocusOptions) {
    this.elementRef.nativeElement.focus(options);
  }
}
