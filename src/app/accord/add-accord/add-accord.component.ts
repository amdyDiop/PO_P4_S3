import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AccordService} from './accord.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-add-accord',
  templateUrl: './add-accord.component.html',
  styleUrls: ['./add-accord.component.scss']
})
export class AddAccordComponent implements OnInit {

  uploadedFiles: any[] = [];
  form: FormGroup
  submitted = false
  constructor(public refetentielSrv: AccordService, public  activatedRoute: ActivatedRoute, private alertSrv: AlertService, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      programme: ['',]
    })
  }
  onUpload(event) {
    this.form.value.programme = event.currentFiles[0]
  }
  get f() {
    return this.form.controls
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.alertSrv.message('Validé tout les champs avant de soumettre le formulaire', 'error')
      return
    }

    const formData = new FormData();
    formData.append("programme",this.form.value.programme)
    /* Display the key/value pairs
    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }*/
    this.refetentielSrv.create(formData).subscribe(
      data => {
        this.alertSrv.message(data, 'success')
        this.form.reset();
        this.submitted = false;
      },
      error => {
        console.log(error)
        if (error.error.text) {
          this.alertSrv.message(error.error.text, 'error')
        }
        if (error.error.detail) {
          this.alertSrv.message(error.error.detail, 'error')
        } else
          this.alertSrv.message(error.error.message, 'error')
      }
    )
  }

  ngOnInit(): void {
  }



}
