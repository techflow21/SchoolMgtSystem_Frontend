import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Chinenye Obi',
    work: 'Student',
    project: 'SSS 3',
    priority: 'Low',
    badge: 'badge-info',
    budget: '$310',
  },
  {
    id: 2,
    name: 'Stanley Joshi',
    work: 'Student',
    project: 'JSS 3',
    priority: 'Medium',
    badge: 'badge-primary',
    budget: '$240',
  },
  {
    id: 3,
    name: 'Sunny Job',
    work: 'Student',
    project: 'JSS 1',
    priority: 'High',
    badge: 'badge-danger',
    budget: '$100',
  },
  {
    id: 4,
    name: 'Adewale David',
    work: 'Student',
    project: 'JSS 2',
    priority: 'Critical',
    badge: 'badge-success',
    budget: '$125',
  },
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
