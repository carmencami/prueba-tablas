import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  email: string;
  animal: string;
}


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'animal'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource();
  email: UserData[] = [];

  animalFilter = new FormControl('');
  filterValue = {
    animal: ''
  }
  
  constructor(private http: HttpClient, private authService : AuthService) { 
  }

  getEmail(): Observable<UserData[]> {
    let loggedUser = this.authService.getLoggedUser();
    return this.http.get<UserData[]>('http://localhost:3000/tabla?email=' + loggedUser);
  }

  ngOnInit(): void {
    this.getEmail().subscribe((email) => {
      this.email = email;
      this.dataSource.data = email;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
