import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
trimestre=["1","2","3","4"];
annee=["2019"];
assures=[{"cleAssure":13,"avantageAssure":null,"employeur":null,"numAssure":4,"nom":"zed","prenom":"rg","statut":"rgtfr","avantageAssures":[],"employeurs":[]}];
  constructor() { }

  ngOnInit() {
    this.remplirAnnee();
    console.log(this.annee);
  }
  remplirAnnee(){
    for(let i=1;i<=10;i++){
      var y=2019+i;
      this.annee.push(y.toString());
    }
  }

}
