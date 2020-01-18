import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
declare let Email;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  customerForm:any;

  constructor(private formBuilder:FormBuilder) { 
    this.customerForm = this.formBuilder.group({
      name:'',
      phoneNumber:'',
      email:'',
      message:''
    });

  }

  ngOnInit() {
  }



  sendEmail(customer:any){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "dthom94@gmail.com",
      Password : "7880FF6B7AB606CC4E7C1AF50D30DAAACA6A",
      To : 'info.AYWEvents@gmail.com',
      From : customer.email,
      Subject : customer.name,
      Body : customer.message +`\n\nName:${customer.name}\n
      Email: ${customer.email}
      \nPhone: ${customer.phoneNumber}`
  }).then(
    message => alert(message)
  );
  }


}
