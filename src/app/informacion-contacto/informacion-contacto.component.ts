import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css']
})
export class InformacionContactoComponent implements OnInit {
@Input()dataInfoContact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
