import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMailService } from '@app/@shared/services/send-mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  formErrors: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private sendMailService: SendMailService
  ) {
    this.form = this.formBuilder.group({
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      title: [null, Validators.required],
      text: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.sendMailService.sendMail(this.form.value).subscribe(() => {
        debugger;
      });
    }
  }
}
