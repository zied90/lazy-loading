import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {RouterModule} from "@angular/router";
import {PostsRoutes} from "../posts/posts.routes";
import {DetailsRoutes} from "./datails.routes";



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    RouterModule.forChild(DetailsRoutes),
    CommonModule
  ]
})
export class DetailsModule { }
