import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent {

  apiUrl = 'https://pixabay.com/api/';
  apiKey = '34573560-b4b29946062bf53b893e1ec40';
  imageUrls: string[] = [];

  constructor(private http: HttpClient){
  }

  searchImages(searchTerm: string) {
    console.log('Término de búsqueda:', searchTerm); // Imprimir el término de búsqueda en la consola
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${encodeURIComponent(searchTerm)}`;
    debugger;
    this.http.get(url).subscribe((response: any) => {
      const imageUrls = response.hits.map((hit: any) => hit.webformatURL);
      this.showImages(imageUrls);
    });
  }
  
  showImages(imageUrls: string[]){
    this.imageUrls = imageUrls;
  }
}
