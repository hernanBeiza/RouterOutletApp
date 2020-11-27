import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';

import { MiModalComponent} from './mi-modal/mi-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public modalRef: NgbModalRef;

  constructor(private router:Router, private modalService:NgbModal) { }

	ngOnInit() { }

	public irLogin():void {
		this.router.navigate(["login"]);
	}

  public irModal():void {
  	console.log("irModal();");
    this.modalRef = this.modalService.open(MiModalComponent, {windowClass: 'modal-in', size: 'lg'});

    this.modalRef.result.then(valueClosed => {
      console.log(valueClosed);

    }).catch(valueDismiss => {
      console.log(valueDismiss);
			/*
	    this.router.navigate(["/",
	      {outlets: { modal: null } }
	    ],{ skipLocationChange: true });
	    */
    });

  }

}
