import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { }

	public irHome():void {
		this.router.navigate(["/"]);
	}

	public irTramitar():void {
		this.router.navigate(["uno"]);
	}
	
}
