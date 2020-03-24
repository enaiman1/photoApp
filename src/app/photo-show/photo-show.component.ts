import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service'
@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;

  constructor(private photoService: PhotoFetchService) {
    this.fetchPhoto()
   }

   onClick(){
    this.fetchPhoto()
   }

   fetchPhoto(){
    this.photoService.getPhoto().subscribe(response=>{
      this.photoUrl = response.urls.regular;
          });
   }

  ngOnInit() {
  }

}
