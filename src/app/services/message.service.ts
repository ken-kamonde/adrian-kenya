import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
  
  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message)
  }
}