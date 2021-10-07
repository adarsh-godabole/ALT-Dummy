import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {FetchdataService} from '../fetchdata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingshows = [];
  comingsoon=[];
  drama=[];
  imageurl;
  constructor(private http: HttpClient, private ser:FetchdataService) { 
  }
   ngOnInit() {
    // this.http.get("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/trending-home-1")
    // .subscribe((result) => {
    //   //  console.log(result["content"]);   
    //    this.trendingshows=result["content"]
    //   //  console.log(this.mydata[0]["images"]);
    //    const image = this.trendingshows[0]["images"];
    //    console.log(image[0].url);       
    // })

    this.ser.getTrendingshow().subscribe(
      (result) => {
        this.trendingshows=result["content"]
      }
    )
   
    this.ser.getComingsoon().subscribe(
      (result) => {
        this.comingsoon=result["content"]
      }
    )

    this.ser.getDrama().subscribe(
      (result) => {
        this.drama=result["content"]
      }
    )


    // this.http.get("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/coming-soon")
    // .subscribe((result) => {
    //   //  console.log(result["content"]);   
    //    this.comingsoon=result["content"]
    //   //  console.log(this.mydata[0]["images"]);
    //    const image = this.comingsoon[0]["images"];
    //   //  console.log(image[0].url);       
    // })
  }
  displaytitle(item){
    alert(item.title);
  }
  getimage(item)
  {
    return item.images[0].url
  }
}
