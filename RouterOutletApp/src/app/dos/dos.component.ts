import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, ) { }

  ngOnInit() {
  }

  public volverPantallaUno():void {
  	if(this.activatedRoute.outlet==="modal"){
      this.router.navigate([{outlets: 
        { 
          //primary: ['tareas'],
          modal: ['uno'] 
        }}]
      );
  	} else {
			this.router.navigate(["/uno"]);
  	}
  }

}