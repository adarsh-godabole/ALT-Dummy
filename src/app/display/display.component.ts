import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() item ;
  url="https://api.cloud.altbalaji.com";
  isfetched:Boolean = false;
  imageurl=''
  images = []
  titleandimage=[]
  constructor(private http: HttpClient,) { }
  ngOnInit() {
    this.getimage()
  }
  displaytitle(item){
  alert(item.title)  }
  getimage()
  {
      if(this.item)
      {
      this.http.get(this.url+this.item.external_id).subscribe(
        (res)=>{
          console.log(res["content"][0].title);
          // this.imageurl=res["content"][0]["images"][0]
          res['content'].forEach((item)=>{ 
            console.log(item.title);
            const content = {
              title : item.title,
              imageurl : item['images'][0].url 
            }
            this.titleandimage.push(content)
          this.isfetched=true
          })
        }
      )    
  }
}
}
