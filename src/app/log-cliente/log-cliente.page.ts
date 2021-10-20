import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router";

@Component({
  selector: 'app-log-cliente',
  templateUrl: './log-cliente.page.html',
  styleUrls: ['./log-cliente.page.scss'],
})
export class LogClientePage implements OnInit {

  constructor(public router:Router)  { }

  ngOnInit() {
  }
  onSubmitLogin()
  {
    
      this.router.navigate(['/carta-cliente']);
    
  }
}
