export class Fees {
    Id:number;
    Type:string;
    Semester:string;
    TotalPaid:number;
    Due:number;
    DateofPayment:string;

    constructor(Id:number, Type:string,Semester:string, TotalPaid:number,Due:number,DateofPayment:string){
        this.Id=Id;
        this.Type=Type;
        this.Semester=Semester;
        this.TotalPaid=TotalPaid;
        this.Due=Due;
        this.DateofPayment=DateofPayment;

    }
}