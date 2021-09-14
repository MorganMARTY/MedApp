import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestserviceService } from './restservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedApp';
  server = "https://fhir.eole-consulting.io/api";
  pageMed: boolean = false;
  practitioner: any = {};
  patient: any = {};
  observationpatients: any={};

constructor(private http: HttpClient){
  this.getPractitioner();
  this.getPatient();
  this.getObservation();
}


getPractitioner(){
  this.http.get(this.server + '/practitioner/613f4b25a5b46400122cf50f').subscribe(data => { this.practitioner = data });    
}
getPatient(){
  this.http.get(this.server + '/patient/612e0350a5b46400122dx5081').subscribe(data => { this.patient = data });    
}
getObservation(){
  this.http.get(this.server + '/observation?subject.reference=Patient/612e0350a5b46400122dx508').subscribe(data => { this.observationpatients = data });    
}
}
