import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styles: []
})
export class TestPageComponent implements OnInit {

  onUpdate(id, value) {
    // update the message service. hook the update method in the  service. 
    this.message.update(id, value);
  }
  // Included the new service here;
  // constructor(private mail : MailService){

  // }

  // dependency injection : Note - No need to import the mail service now
  // @inject decorator find the mail service and inject it inside this component.
  constructor( @Inject('mail') private mail, @Inject('message') private message) { }

  ngOnInit() {
  }

}
