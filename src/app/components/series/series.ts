import { Component } from '@angular/core';
import { SeriesService } from '../../services/series-service';
import { Serie } from '../../model/seriesinterface';

@Component({
  selector: 'app-series',
  templateUrl: './series.html',
  styleUrls: ['./series.css'],
})
export class SeriesComponent {
  series: Serie[] = [];

  constructor(private oSeriesService: SeriesService) {}

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.oSeriesService.getAll().subscribe((shows: Serie[]) => {
      this.series = shows;
    });
  }
}
