import { Register } from "./register";
export abstract class Index {
   static GetSource():string {
      let urlCurrent:string = window.location.href;
      let validate:boolean = urlCurrent.indexOf("localhost") > -1;
      return validate ? 'http://localhost/projects/ajax-typescript' : '';
   }
}

// Send register
Register.Send();