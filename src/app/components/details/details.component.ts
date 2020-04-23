import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user$: any;
  loading = true;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        data => this.user$ = data
      );
  }

}
