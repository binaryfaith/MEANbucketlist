import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BucketService {

  constructor(private _http: Http) { }


  getAllBucket(callback){
    this._http.get('/mybucket').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  delete(id) {
    this._http.post('/delete', {id: id}).subscribe();
  }

}
