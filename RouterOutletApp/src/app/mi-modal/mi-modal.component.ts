import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mi-modal',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.scss']
})
export class MiModalComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, public activeModal: NgbActiveModal) { }

  ngOnInit() { 
    this.router.navigate(["/",
      {outlets: { modal: "uno" } }
    ],{ skipLocationChange: true });
  }
 
  ngOnDestroy() {
    /*
    this.router.navigate(["/",
      {outlets: { modal: null } }
    ]);
    */
  }

}