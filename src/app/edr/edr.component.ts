import { Component, OnInit } from '@angular/core';
import { EdrService } from '../edr.service';

@Component({
  selector: 'app-edr',
  templateUrl: './edr.component.html',
  styleUrls: ['./edr.component.css']
})
export class EdrComponent implements OnInit {

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
    this.edrService.getOrgCardByEdrpou(this.edrpou).subscribe((data: any) => {
      console.log(data);
      this.org = data;
    });
  }

}
