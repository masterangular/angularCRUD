import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocaldialogComponent } from '../localdialog/localdialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private localdialog : MatDialog){

  }
  ngOnInit(): void {
    
  }
  openDialog() {
    this.localdialog.open(LocaldialogComponent, {
      width : '30%'
    });
  }
 
  
  

}
