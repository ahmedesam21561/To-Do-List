import { Guid } from "guid-typescript";

export class TODO{
  constructor(public ID:Guid,public Title:string,public isCompletted:boolean){}
}
