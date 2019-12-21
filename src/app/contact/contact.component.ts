import { Component, OnInit } from '@angular/core';
import { EventRequest } from 'src/models/event-request';
import { FormGroup, Validator ,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public eventRequest:EventRequest;
  public eventForm = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    service:['',Validators.required],
    location:['',Validators.required],
    date:['',Validators.required],
    details:['',Validators.required],
  });

  onSubmit(){
    window.alert("Form submitted!");
  }
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }


}
