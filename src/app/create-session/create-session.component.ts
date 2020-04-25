import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, NgControlStatusGroup } from "@angular/forms"
import { ISession } from '../events/shared/session.model';
import { Router } from '@angular/router';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveSessionEmitter = new EventEmitter()

  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl
  createSessionForm: FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = new FormControl("", Validators.required)
    this.presenter = new FormControl("", Validators.required)
    this.duration = new FormControl("", Validators.required)
    this.level = new FormControl("", Validators.required)
    this.abstract = new FormControl(
      "", 
      [
        Validators.required,
        Validators.maxLength(400),
        this.restrictedWords([
          "foo", "bar"
        ])
      ]
    )

    this.createSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValue){
    if (this.createSessionForm.valid){
      let newSession: ISession = {
        abstract: undefined,
        duration: +formValue.duration,
        id: 1,
        level: formValue.level,
        name: formValue.name,
        presenter: formValue.presenter,
        voters: []
      }

      this.saveSessionEmitter.emit(newSession)
      this.router.navigate(["events"])
    }
  }

  isFormControlDirtyAndInvalid(formControl :FormControl){
    return formControl.invalid && formControl.dirty
  }

  private restrictedWords(forbiddenWordArray) {
    return (formControl: FormControl): { [key: string]: any } => {
      if (!forbiddenWordArray){
        return null
      }

      var invalidWords = forbiddenWordArray
        .map(w => formControl.value.includes(w) ? w: null)
        .filter(w => w != null)
      
      return invalidWords && invalidWords.length > 0 ?
        {"restrictedWords": invalidWords} :
        null
    }
  }
}
