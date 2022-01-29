import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addLesson();
  }

  mainForm: FormGroup = this.fb.group({
    getLessons: this.fb.array([])
  })

  get getLessons() {
    return (this.mainForm.controls['getLessons']) as FormArray
  }

  addLesson() {
    const lessonForm:FormGroup = this.fb.group({
      lessonTitle: ['', Validators.required],
      lessonAuthor: ['', Validators.required]
    })
    this.getLessons.push(lessonForm)
  }
}
