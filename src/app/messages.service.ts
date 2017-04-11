import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  texts = [
    { index: 0, text: "This is my first message" },
    { index: 1, text: "This is the second message" },
    { index: 2, text: "This is the third message" }
  ];

  update = (id, value) => {
    this.texts = this.texts.map(f => 
      (f.index === id) ? {index : id, text : value} : f
    )
  }
  constructor() { }

}
