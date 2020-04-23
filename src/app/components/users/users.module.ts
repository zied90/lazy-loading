import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users.routes';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule,

  ]
})
export class UsersModule {
}
