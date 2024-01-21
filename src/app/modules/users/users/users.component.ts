import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/core/interfaces/user';
import { UserService } from '@app/core/services/user.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit{
  users?: any[];


  dataSource!: MatTableDataSource<any>;
  dataSources!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['_id', 'student_name', 'student_email', 'section', 'action'];

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.dataSource.paginator = this.paginator;

    this.getAllOwners();
  }

  deleteStudent(index: number, element: any) {
    // Your deleteStudent function logic
  }

  displayedColumns3: string[] = ['id', 'assigned', 'name', 'priority', 'budget', 'action'];
  dataSource3 = ELEMENT_DATA3;
 
    public displayedColumnss = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
    //public dataSources = new MatTableDataSource<User>();
  
    @ViewChild(MatSort) sort!: MatSort;
  
  
   
   
    public getAllOwners = () => {
      this.userService.getAll()
      .subscribe(res => {
        this.dataSources.data = res as User[];
      })
    }
  
    ngAfterViewInit(): void {
      this.dataSources.sort = this.sort;
      this.dataSources.paginator = this.paginator;
    }
  
    public customSort = (event:any) => {
      console.log(event);
    }
  
    public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
   
    public redirectToDetails = (id: string) => {
      
    }
   
    public redirectToUpdate = (id: string) => {
      
    }
   
    public redirectToDelete = (id: string) => {
      
    }


  
}

export interface PeriodicElement3 {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k'},
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];







// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss'],
// })
// export class UsersComponent implements OnInit {
//   users?: any[];
//   StudentData: any = [];

//   dataSource!: MatTableDataSource<User>;
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   displayedColumns: string[] = [
//     '_id',
//     'student_name',
//     'student_email',
//     'section',
//     'action',
//   ];


//   deleteStudent(index: number, e:any) {
//     if (window.confirm('Are you sure')) {
//       const data = this.dataSource.data;
//       data.splice(
//         this.paginator.pageIndex * this.paginator.pageSize + index,
//         1
//       );
//       this.dataSource.data = data;
//       this.userService.delete(e._id).subscribe();
//     }
//   }


//   constructor(private userService: UserService) {
//     this.userService.getAll().subscribe((data) => {
//       this.StudentData = data;
//       this.dataSource = new MatTableDataSource<User>(this.StudentData);
//       setTimeout(() => {
//         this.dataSource.paginator = this.paginator;
//       }, 0);
//     });
//   }

//   ngOnInit() {
//     // Hard coded users for demo
//     this.users = [
//       { id: '1', name: 'John Doe', email: 'john@example.com', section: 'A' },
//       { id: '2', name: 'Jane Smith', email: 'jane@example.com', section: 'B' },
//       { id: '3', name: 'Alice Johnson', email: 'alice@example.com', section: 'C' },
//       // Add more sample users if needed
//     ];
    
//     this.userService
//       .getAll()
//       .pipe(first())
//       .subscribe((users) => (this.users = users));
//   }

//   deleteUser(id: string) {
//     const user = this.users!.find((x) => x.id === id);
//     user.isDeleting = true;
//     this.userService
//       .delete(id)
//       .pipe(first())
//       .subscribe(() => (this.users = this.users!.filter((x) => x.id !== id)));
//   }
// }




// import { Student } from './../../shared/student';
// import { ApiService } from './../../shared/api.service';
// import { Component, ViewChild, OnInit } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-students-list',
//   templateUrl: './students-list.component.html',
//   styleUrls: ['./students-list.component.scss'],
// })
// export class StudentsListComponent implements OnInit {
//   StudentData: any = [];
//   dataSource: MatTableDataSource<Student>;
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   displayedColumns: string[] = [
//     '_id',
//     'student_name',
//     'student_email',
//     'section',
//     'action',
//   ];

//   constructor(private studentApi: ApiService) {
//     this.studentApi.GetStudents().subscribe((data) => {
//       this.StudentData = data;
//       this.dataSource = new MatTableDataSource<Student>(this.StudentData);
//       setTimeout(() => {
//         this.dataSource.paginator = this.paginator;
//       }, 0);
//     });
//   }

//   ngOnInit() {}

//   deleteStudent(index: number, e) {
//     if (window.confirm('Are you sure')) {
//       const data = this.dataSource.data;
//       data.splice(
//         this.paginator.pageIndex * this.paginator.pageSize + index,
//         1
//       );
//       this.dataSource.data = data;
//       this.studentApi.DeleteStudent(e._id).subscribe();
//     }
//   }
// }
