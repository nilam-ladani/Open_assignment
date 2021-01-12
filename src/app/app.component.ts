import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open';
  // name = 'Slider Example';
  value = 0;
  min=10000;
max=700000;
  step = 10;
  value2 = 0;
  min2=10000;
max2=700000;
  step2 = 10;
  // thumbLabel = true;
  calculatorForm = this.fb.group({
    monthlyIncome: [],
    monthlyExpense: [],
    tenure: []
  });
  constructor(
    private fb: FormBuilder
  ){}
  submitForm(){
    
  }
}
