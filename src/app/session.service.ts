import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  userInfo;
  tokenInfo:any;
  constructor() { }


  setUser(info)
  {
    this.userInfo=info;
  }
  getUser()
  {
    return this.userInfo;
  }

  setToken(token)
  {
    this.tokenInfo=token;
  }

  getToken()
  {
    return this.tokenInfo;
  }
}
