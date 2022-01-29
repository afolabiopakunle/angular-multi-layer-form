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
    this.addLesseon()
  }

  mainForm = this.fb.group({
    lessons: this.fb.array([])
  })

  get lessons() {
    return (this.mainForm.controls['lessons']) as FormArray;
  }

  addLesson() {
    const lesson = this.fb.group({
      lessonTitle: ['', Validators.required],
      lessonAuthor: ['', Validators.required]
    })
    this.lessons.push(lesson)
  }
}
