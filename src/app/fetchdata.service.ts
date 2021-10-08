import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  trendingshows=[]

  constructor(private http: HttpClient) { }

//    getTrendingshow(){

//       return this.http.get("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/trending-home-1")
    

    


//   }

//   getComingsoon(){

//     return this.http.get("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/coming-soon")
  

  


// }

// getDrama(){

//   return this.http.get("https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/trending-home-1")





// }

getShows(){
  return this.http.get('https://api.cloud.altbalaji.com/sections/31?')
}

fetchimage(url)
{
  // console.log(url);
  
  //  return this.http.get(url)
}

}
