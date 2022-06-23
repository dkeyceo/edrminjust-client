import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { EdrService } from '../edr.service';

@Component({
  selector: 'app-edr',
  templateUrl: './edr.component.html',
  styleUrls: ['./edr.component.css']
})
export class EdrComponent implements OnInit {

  public loading: boolean = false
  public org?: any;
  public edrpou: string='';
  constructor(private edrService: EdrService) { }

  ngOnInit(): void {
      
  }
  /*
  ngOnInit(): void {
    this.edrService.getOrgCard().subscribe((data: any) => {
      console.log(data);
      this.org = data;
    });
  }
*/
  getOrgByEdrpou( ){
    this.loading = true;
    this.edrService.getOrgCardByEdrpou(this.edrpou)
    .pipe(delay(1000))
    .subscribe((data: any) => {
      this.org = data;
      this.loading = false;
    });
  }

}
