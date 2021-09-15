import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
@Input() dataInfoContact: any;
  constructor() { }

  ngOnInit(): void {
    this.dataInfoContact
    console.log(this.dataInfoContact)
  }

}
