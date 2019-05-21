import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamilyoverviewObjectGeneratorService } from 'src/app/service/familyoverview-object-generator.service';

@Component({
  selector: 'app-family-chooser',
  templateUrl: './family-chooser.component.html',
  styleUrls: ['./family-chooser.component.css']
})
export class FamilyChooserComponent implements OnInit {

  family: string;
  familyOverview: object[];

  constructor(private route: ActivatedRoute, private familyOverviewGeneratorService: FamilyoverviewObjectGeneratorService) {
    
    this.route.params.subscribe(params => {
      this.family = params['family'];
      this.familyOverview = this.familyOverviewGeneratorService.getFamilyOverviewObject(this.family);

      console.log(this.familyOverview);
    });
   }

  ngOnInit() {
  }

}
