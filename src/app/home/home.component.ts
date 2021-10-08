import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FetchdataService} from '../fetchdata.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isfetched:Boolean;
  allshows=[];
  myshows=[];
  trendingshows = [];
  comingsoon=[];
  drama=[];
  imageurl;
  ishovered=[];
  constructor(private http: HttpClient, private ser:FetchdataService) { 
  }
   ngOnInit() {
      this.ser.getShows().subscribe(
        (res)=>{this.allshows = res["lists"];
        this.myshows = this.allshows.filter((e,index)=>{
          return (e.titles.default === "Trending" || e.titles.default === "Drama")
        })
            this.isfetched=true;
        }
      )
  }
  displaytitle(item1){
  }
}
