export class Result {
    Id:number;
    Semester:string;
    DateofExamination:string;
    DateofResult:string;
    TotalCredit:number;
    GradeObtained:string;
    Status:string;

    constructor(Id:number, Semester:string,DateofExamination:string, DateofResult:string,TotalCredit:number,GradeObtained:string,Status:string){
        this.Id=Id;
        this.Semester=Semester;
        this.DateofExamination=DateofExamination;
        this.DateofResult=DateofResult;
        this.TotalCredit=TotalCredit;
        this.GradeObtained=GradeObtained;
        this.Status=Status;

    }
}