import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, merge, of} from 'rxjs';
import {startWith, map, switchMap} from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements AfterViewInit {
  title = 'TODO List';
  todoDatabase: TodoDatabase | null;
  data: TodoItem[] = [];
  dataSource = new MatTableDataSource<TodoItem>();
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  length = 10;

  constructor(private http: HttpClient) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.todoDatabase = new TodoDatabase(this.http);
    this.todoDatabase.getTodoList().subscribe(data => {
      this.data = data;
      this.dataSource.data = data;
      console.log(this.data);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}



export interface TodoItem {
  userId: string;
  id: string;
  title: string;
  completed: string;
}


export class TodoDatabase {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<TodoItem[]> {
    const href = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<TodoItem[]>(href);
  }
}


