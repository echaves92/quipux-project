import { Component, OnInit } from '@angular/core';


import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quipux';
  containerActive=true
  products: any = [];
  infoContact: any = [];
  dataId:any = [];
  
  StringArticle: any;
  StringDatoVista:any;
  DataIdSelect:any;
  


  clicked() {
    this.containerActive=!this.containerActive
    console.log (this.containerActive)
   
  }
  clickedArt(item,article){
   console.log(item.id, article);
   
   this.StringArticle = article;
  }
  clickedDatosVista(dataV){
    console.log(dataV);
  
    this.StringDatoVista = dataV;
    
   }
  constructor(private httpClient: HttpClient){
  
  }
  ngOnInit(){
    this.httpClient.get("assets/json/articulos.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      console.log(this.products)
      this.DataIdSelect= this.products.id
      console.log(this.DataIdSelect)
    });
    this.httpClient.get("assets/json/info-contacto.json").subscribe(data =>{
      console.log(data);
      this.infoContact = data;
    })
  }
    
} 
