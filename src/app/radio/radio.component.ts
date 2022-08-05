import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  booleanData: boolean = sessionStorage.getItem('loginData') ? true : false;
  constructor(private router: Router) {}
  readioSelected: string = 'fruit';
  fruitData: { item: string; image: string }[] = [
    {
      item: 'apple',
      image: 'https://freepngimg.com/thumb/apple/9-apple-png-image-thumb.png',
    },
    {
      item: 'lemon',
      image:
        'https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png',
    },
    {
      item: 'banana',
      image: 'https://freepngimg.com/thumb/banana/8-banana-png-image-thumb.png',
    },
  ];
  vegetableData: { item: string; image: string }[] = [
    {
      item: 'potatoes',
      image:
        'https://freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png',
    },
    {
      item: 'Tomato',
      image: 'https://freepngimg.com/thumb/tomato/6-tomato-png-image-thumb.png',
    },
    {
      item: 'Brinjal',
      image:
        'https://freepngimg.com/thumb/eggplant/14-eggplant-png-images-download-thumb.png',
    },
  ];

  ngOnInit(): void {}
  onLogout(): void {
    this.booleanData = false;
    this.router.navigateByUrl('');
    sessionStorage.clear();
  }
}
