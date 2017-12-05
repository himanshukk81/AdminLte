import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  userInfo;
  constructor() { }


  setUser(info)
  {
    this.userInfo=info;
  }
  getUser()
  {
    return this.userInfo;
  }
}
