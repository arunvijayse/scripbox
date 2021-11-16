import { OnInit } from '@angular/core';
import {Challenge} from '../_models/challenge'
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { ChallengeService } from '../_services/challenge.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['empId', 'title', 'description', 'tags', 'date', 'votes', 'option'];
  dataSource: MatTableDataSource<Challenge>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    const challenges: Challenge[] = this.challengeService.getAllChallenges();
    this.dataSource = new MatTableDataSource(challenges);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
