import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user/user.service';
import { UserData } from 'src/app/services/user/userData';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'role']
  filterValue: string = '';
  pageEvent: PageEvent | undefined;
  constructor(private userService: UserService) { };
  dataSource: UserData | any = []

  ngOnInit(): void {
    this.initDataSource()

  }
  initDataSource() {
    this.userService.findAll(1, 3).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe();

  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;
    if (this.filterValue == null) {
      page = page + 1;
      this.userService.findAll(page, size).pipe(
        map((userData: UserData) => this.dataSource = userData)
      ).subscribe();
    } else {
      this.userService.paginateByName(page, size, this.filterValue).pipe(
        map((userData: UserData) => this.dataSource = userData)
      ).subscribe()
    }

  }

  findByName(username: string) {
    this.userService.paginateByName(0, 3, username).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe()
  }

  // navigateToProfile(id) {
  //   this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  // }


}
