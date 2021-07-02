import { Component, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  listOfData = [];
  constructor(private nzContextMenuService: NzContextMenuService) { }

  ngOnInit(): void {
    this.listOfData = [
      {
        key: '1',
        name: 'John Brown, John Brown, John Brown, John Brown, New York No. 1 Lake Park',
        age: 32,
        code: 'CDL Management Service Pte. Ltd.',
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Oim Green, New York No. 1 Lake Park, Jim Green Jim GreenJim Green ',
        age: 42,
        code: 'Panasonic Company ABC',
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        age: 32,
        code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
        address: 'Sidney No. 1 Lake Park'
      },
      {
        key: '4',
        name: 'Black Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park  1 Lake Park, Sidney No. 1 Lake Park',
        age: 32,
        code: 'Black Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        address: 'Sidney No. 1 Lake Park'
      }
    ];
  }
  change(value: boolean): void {
    console.log(value);
  }
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    this.nzContextMenuService.create($event, menu);
  }

}
