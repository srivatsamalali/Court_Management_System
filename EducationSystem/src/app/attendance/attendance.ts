export class Attendance {
    Id:number;
    Subject:string;
    TotalClasses:number;
    TotalClassAttended:number;
    Percentage:number;
    Status:string;
   constructor( Id:number,Subject:string, TotalClasses:number, TotalClassAttended:number, Percentage:number, Status:string) {
      this.Id=Id;
      this.Subject=Subject;
      this.TotalClasses=TotalClasses;
      this.TotalClassAttended=TotalClassAttended;
      this.Percentage=Percentage;
      this.Status=Status;
   }

}