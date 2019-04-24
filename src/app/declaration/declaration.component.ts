import { Component, OnInit } from '@angular/core';
import { DeclarationService } from '../services/declaration.service';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {
  trimestre=["1","2","3","4"];
  annee=["2019"];
  ds: any[];
  
  renumeration=[];
  total_reporter: any=0;
  searchText:string;
  searchCodeExp:string;
  
    constructor(private declarationService:DeclarationService) { }
  
    ngOnInit() {
    
    }
  recherche(){
    console.log("recherche***"+this.searchText+ " code="+this.searchCodeExp);
    this.declarationService.findByCriteria(this.searchText,this.searchCodeExp).subscribe(data=>{this.ds=data},(error) => {
      console.log(error);
  }, () => {
      console.log('Fini !'+this.ds.length);
      for (let index = 0; index < this.ds.length; index++) {
        
         
          console.log("==="+this.renumeration);
   
        this.renumeration.push({"assure": index,"m1":0, "m2":0, "m3":0});
        
      }
      
   
  });
    this.remplirAnnee();
    console.log("annnee"+this.annee);
  
     
    console.log(this.ds);
   

  }
  changerenum(index){
    this.total_reporter=0;
    this.ds[index].total_general=parseFloat(this.renumeration[index].m1)+parseFloat(this.renumeration[index].m2)+parseFloat(this.renumeration[index].m3);

    console.log("total_reporter==="+this.total_reporter);
    console.log("this.ds[index1].total_general==="+this.ds[index].total_general);

 
      for (let index1 = 0; index1 < this.ds.length; index1++) {
        if (this.total_reporter+this.ds[index1].total_general>0) {
          this.total_reporter=this.total_reporter+this.ds[index1].total_general;
    
        } else {
          this.total_reporter=0;
        }
      }
   

  }
  remplirAnnee(){
    for(let i=1;i<=10;i++){
      var y=2019+i;
      this.annee.push(y.toString());
    }
  }
  }
