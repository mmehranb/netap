import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormErrosCtrlService } from '@app/@shared/services/form-erros-ctrl.service';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0 }),
        animate('200ms linear', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('200ms linear', style({ height: 0 })),
      ]),
    ]),
    trigger('fadeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms linear', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('150ms linear', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FormFieldComponent implements OnInit, AfterViewChecked {
  @Input() form?: FormGroup;
  @Input() formCtrlName: string;
  @Input() label: string;
  @Input() fieldClass?: string = '';
  @Input() field?: string = 'input';
  @Input() fieldType?: string = 'text';
  @Input() inputMode?: string = 'text';
  @Input() fieldValueText: any = null;
  @Input() fieldDisabled?: boolean = false;
  @Input() options: Array<any> = new Array();
  @Input() readOnly: boolean = false;
  @Input() mask?: string;
  @Input() helpDesc?: string = '';
  @Input() handleValidation: any = '';
  @Input() inputFocus: boolean = false;
  @Input() datePickerFirstViewOption: 'month' | 'year' | 'multi-year' = 'month';
  @Output() onClick = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onKeyup = new EventEmitter<any>();

  fieldActivation: boolean = false;
  isDisabled: boolean = false;
  handleActiveClass: boolean = false;
  showOptionsDropDown: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private formErrorService: FormErrosCtrlService
  ) {}

  ngOnInit() {
    this.handleActiveClass =
      !!this.form.value[`${this.formCtrlName}`] ||
      this.form.value[`${this.formCtrlName}`] === 0;
    this.form.get(`${this.formCtrlName}`).valueChanges.subscribe((data) => {
      if (this.field == 'select' && this.options) this.handleActiveClass = true;
      else {
        this.handleActiveClass = !!data || data === 0;
      }
      this.handleValidation = this.formErrorService.validateForm(
        this.form.controls[`${this.formCtrlName}`]
      );
      this.fieldValueText = data;
      if (this.options.length) {
        const field = this.options.find(
          (option) =>
            option.id == this.form.getRawValue()[`${this.formCtrlName}`]
        );
        this.fieldValueText = field ? field.label : '';
      }
    });
    if (this.options.length) {
      const field = this.options.find(
        (option) => option.id == this.form.getRawValue()[`${this.formCtrlName}`]
      );
      this.fieldValueText = field ? field.label : '';
    }
  }

  ngAfterViewChecked() {
    if (this.handleValidation && this.handleValidation.scrollToItem) {
      this.handleValidation.scrollToItem = false;
      this.scrollToInValidItem();
    }
    // your code to update the model
    this.cdr.detectChanges();
  }

  emitOnClick(e?: any) {
    this.onClick.emit(e);
  }

  emitOnChange(e?: any) {
    this.onChange.emit(e);
  }

  emitOnKeyup(e: any) {
    this.onKeyup.emit(e);
  }

  checkValidationStatus() {
    return (
      this.handleValidation &&
      this.handleValidation.msg &&
      this.form.get(`${this.formCtrlName}`).touched
    );
  }

  textAreaAdjust(filed: any, textarea: any) {
    if (textarea.scrollHeight <= 250)
      filed.style.height = textarea.scrollHeight + 'px';
    else filed.style.height = 250 + 'px';
  }

  scrollToInValidItem() {
    //TODO
    // const headerOffset = 50;
    // const bodyOffsetTop = document.querySelector('body').getBoundingClientRect().top;
    // const element = document.querySelector(`.js-${this.formCtrlName}`);
    // const elementPosition = element.getBoundingClientRect().top;
    // if (element) {
    //   window.scrollTo({
    //     top: elementPosition - bodyOffsetTop - headerOffset,
    //     behavior: 'smooth',
    //   });
    // }
  }

  clearValue() {
    this.form.controls[`${this.formCtrlName}`].patchValue(null);
  }
}
