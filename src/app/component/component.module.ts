import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TableComponent } from './table/table.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    TooltipModule,
    NzModalModule,
    NzDropDownModule,
    NzLayoutModule,
    NzGridModule
  ],
  exports: [
    TableComponent,
  ]
})
export class ComponentModule { }
