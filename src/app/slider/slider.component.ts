import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  AppState
} from '../app.service';
import {
  Title
} from './title';

import $ from "jquery";



@Component({
  selector: 'slider', // <home></home>
  providers: [
    Title
  ],
  styleUrls: ['./slider.component.scss'],
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {

  @Input() headline: string = "WEEGYMAN";

  public localState = {
    value: ''
  };

 
  constructor(
    public appState: AppState,
    public title: Title
  ) {}



  public ngOnInit() {
   
    $('#sliderRoot li').on('mouseover', function () {
      var imageUrl = $(this).attr('data-image');
      $('#sliderRoot').css('background-image', 'url(' + imageUrl + ')');
    });
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
