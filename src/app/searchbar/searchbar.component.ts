import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchbarService } from './searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
public query : string;

constructor(){
  
  }
  ngOnInit(){
   
  }

}