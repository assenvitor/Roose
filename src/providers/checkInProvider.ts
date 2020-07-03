import { Injectable } from '@angular/core';

@Injectable()
export class CheckInProvider {

  constructor(
    private hello: 'Hello World'
  ) { }

  getGreetings() {
    return this.hello
  }
}
