import { Component, OnInit } from '@angular/core';
import { EventRequest } from 'src/models/event-request';
import { FormGroup, Validator ,FormBuilder, Validators} from '@angular/forms';
declare let Email;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public eventRequest:EventRequest;
  
  public eventForm = this.fb.group({
    name:[''],
    email:[''],
    phone:[''],
    service:[''],
    location:[''],
    date:[''],
    details:['']
  });

  sendEmail(customer:any){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "dthom94@gmail.com",
      Password : "7880FF6B7AB606CC4E7C1AF50D30DAAACA6A",
      To : 'info.AYWEvents@gmail.com',
      From : customer.email,
      Subject : customer.name + ' ' + customer.service,
      Body : customer.message +`\n\nName:${customer.name}\n
      Email: ${customer.email}
      \nPhone: ${customer.phoneNumber}`
  }).then(
    message => alert(message)
  );
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }


}
