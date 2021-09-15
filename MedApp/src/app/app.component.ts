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
  pagePatient: boolean = false;
  practitioner: any = {};
  patient: any = {};
  observationpatients: any = {};
  appointmentmed: any = {};
  p: any = {};
  snackBar: any;

  constructor(private http: HttpClient) {
    this.getPractitioner();
    this.getPatient();
    this.getObservation();
    this.getAppointment();
  }


  getPractitioner() {
    this.http.get(this.server + '/practitioner/613f4b25a5b46400122cf50f').subscribe(data => { this.practitioner = data });
  }
  getPatient() {
    this.http.get(this.server + '/patient/612e0350a5b46400122dx508').subscribe(data => { this.patient = data });
  }
  getObservation() {
    this.http.get(this.server + '/observation?subject.reference=Patient/612e0350a5b46400122dx508').subscribe(data => { this.observationpatients = data });
  }
  getAppointment(){
    this.http.get(this.server + '/appointment?participant.actor.reference=Practitioner/613f4b25a5b46400122cf50f').subscribe(data => { this.appointmentmed = data });    
  }
  putPractitioner() {
    console.log("jsonRequest", JSON.stringify(this.practitioner));
    this.http.put(this.server + '/practitioner/613f4b25a5b46400122cf50f', this.practitioner).subscribe(data => { this.practitioner = data });
    console.log("response", this.practitioner);
  }

  pagePat(referencePatient: string) {
    this.http.get(this.server + '/'+ referencePatient.toLowerCase()).subscribe(data => { this.p = data });
  }

  putObservation(obs: any){
    this.http.put(this.server + '/observation/'+obs.id, obs).subscribe(data => { this.getObservation(); });
  }
}
