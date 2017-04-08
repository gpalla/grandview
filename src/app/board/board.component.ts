import { Component, OnInit } from '@angular/core';

export class Member {
  id: string;
  name: string;
  short_desc: string;
  long_desc: string;
  start_date: Date;
  end_date: Date;
  status: Boolean;
  img_url: string;
  committee: string[];
}

const GVMembers: Member[] = [
  {
    id: 'gxp',
    name: 'Geni Palla',
    short_desc: 'Program Developer @ MapAnything.',
    long_desc: 'I am a computer programmer that focuses on web based applications. ' +
    'I build production ready web applications on a variety of platforms using the latest standards such as: ' +
    'Angular 2 JS, Node JS, and Bootstrap. I also use legacy languages such as ASP.net and JSF. ' +
    'Feel free to reach out to me for any of your IT needs.',
    start_date: new Date(2017, 3, 12),
    end_date: null,
    status: true,
    img_url: '../assets/images/members/geni.jpg',
    committee: ['IT-Committee', 'Sustainability-Committee']
  },
  {
    id: 'exm',
    name: 'Ed Moseley',
    short_desc: 'short test ed mosely',
    long_desc: 'long test ed mosely',
    start_date: new Date(2010, 5, 14),
    end_date: new Date(2017, 3, 12),
    status: true,
    img_url: '../assets/images/members/unknown.jpg',
    committee: ['IT-Committee', 'Sustainability-Committee']
  },
  {
    id: 'kxf',
    name: 'Ken Farrington',
    short_desc: 'short test Ken Farrington',
    long_desc: 'long test Ken Farrington',
    start_date: new Date(2010, 5, 14),
    end_date: new Date(2017, 3, 12),
    status: true,
    img_url: '../assets/images/members/unknown.jpg',
    committee: ['IT-Committee', 'Sustainability-Committee']
  },
  {
    id: 'sxd',
    name: 'Steven Darst',
    short_desc: 'short test Steven Darst',
    long_desc: 'long test Steven Darst',
    start_date: new Date(2010, 5, 14),
    end_date: new Date(2017, 3, 12),
    status: true,
    img_url: '../assets/images/members/unknown.jpg',
    committee: ['IT-Committee', 'Sustainability-Committee']
  },
  {
    id: 'jxd',
    name: 'Janet Kenig',
    short_desc: 'short test Janet King',
    long_desc: 'long test Janet King',
    start_date: new Date(2010, 5, 14),
    end_date: new Date(2017, 3, 12),
    status: true,
    img_url: '../assets/images/members/unknown.jpg',
    committee: ['IT-Committee', 'Sustainability-Committee']
  }
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  title = 'Grandview Board Members';
  members = GVMembers;

  sendContact(id) {
    alert(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
