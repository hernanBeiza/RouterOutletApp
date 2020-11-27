import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  public irPantallaDos():void {
  	console.log(this.activatedRoute);
  	if(this.activatedRoute.outlet=="modal"){
	    this.router.navigate(["/",
	      {outlets: { modal: "dos" } }
	    ],{ skipLocationChange: true });  		
  	} else {
	  	this.router.navigate(["dos"]);  		
  	}
	}

}