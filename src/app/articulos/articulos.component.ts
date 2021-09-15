import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  @Input() item: any;
  @Input() ArticleService:any;
  @Input() dataInfoContact;
  DataFatherArticle:any;
  constructor() { }

  ngOnInit(): void {
    this.DataFatherArticle = this.item
    console.log(this.item)
    this.dataInfoContact
  }

}
