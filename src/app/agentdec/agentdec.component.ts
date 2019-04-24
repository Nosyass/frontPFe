import { Component, OnInit } from '@angular/core';
import { AgentdecService } from '../services/agentdec.service';
import { EmployeurService } from '../services/employeur.service';

@Component({
  selector: 'app-agentdec',
  templateUrl: './agentdec.component.html',
  styleUrls: ['./agentdec.component.css']
})
export class AgentdecComponent implements OnInit {

  
  assure: any[];
  employeurs:any[];
  selectedEmploy:any={};
  selectedCodeExploi:any;
  constructor(private agentdecService: AgentdecService,private employeurService:EmployeurService) { }

  
    ngOnInit() {
      this.employeurService.findAll()  .subscribe(
        (data:any[]) => {
     this.employeurs=data;
     this.selectedEmploy=this.employeurs[0];
     this.selectedCodeExploi=this.selectedEmploy.codeExploitations

        },
        (err) => {
          alert ("Acunes informations sur les employeurs")
        }
      );
    }
  




}
