import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() countryData: any;


  constructor(private apiService: ApiService){}

  
  }

  



