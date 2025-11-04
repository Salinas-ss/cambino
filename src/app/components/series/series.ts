import { Component } from '@angular/core';
import { SeriesService } from '../../services/series-service';

@Component({
  selector: 'app-series',
  templateUrl: './series.html',
  styleUrls: ['./series.css'],
})
export class SeriesComponent {
  series: any[] = [];

  constructor(private oSeriesService: SeriesService) {}

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.oSeriesService.getAll().subscribe((shows: any[]) => {
      console.log(shows);
      this.series = shows;
    });
  }
}
