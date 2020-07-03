import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CONST from '../environments/consts';

@Injectable()
export class FilmeProvider {

  constructor(
    private http: HttpClient
  ) { }

  getFilme() {
    return this.http.get(CONST.FILME)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  }
}

// res.filme
