import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CONST from '../environments/consts';

@Injectable()
export class Provider {
  
  constructor(
    private http: HttpClient
  ) { }

  getFilme() {
    return this.http.get(CONST.FILME)
      .toPromise()
      .then((res: any) => {
        return res;
      })
      .catch((error: any) => {
        return error;
      });
  }
}

