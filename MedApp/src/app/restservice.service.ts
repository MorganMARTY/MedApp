import { HttpClient, HttpHeaders } from '@angular/common/http';

export class RestserviceService{
    server = "https://fhir.eole-consulting.io/api";
    id="";

    public getId(){
        return this.id;
    }
    public setId(id :string){
        this.id = id;
    }
    constructor(private http:HttpClient){}
    private handleError(error:any): Promise<any> 
    {
        console.error('an error occured',error);
        return Promise.reject(error.message || error);
    }

    public getServer(){
        return this.server;
    }

    public getPractitioner(){
        return this.http.get(this.server + '/practitioner/613f4b25a5b46400122cf50f');

    }
    public setHeaders(id:string):HttpHeaders{
        var headers = new HttpHeaders({'Id':id});
        return headers;
    }
}

