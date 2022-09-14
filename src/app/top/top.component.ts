import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  photographer: any;


  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta, private apiService: ApiService) { }

  ngOnInit() {
   this.apiService.getPhotographerByUsername("testuser").subscribe((data: any) => {
    this.photographer = data.photographer;
    console.log(this.photographer);
      this.title.setTitle(`${this.photographer.firstName}${this.photographer.lastName}`);
      this.meta.updateTag({ name: 'description', content: `${this.photographer.firstName}${this.photographer.lastName} is a photographer`});
      this.meta.updateTag({ property: 'og:title', content: `${this.photographer.firstName}${this.photographer.lastName}`});
      this.meta.updateTag({ property: 'og:description', content: `${this.photographer.firstName}${this.photographer.lastName} is a photographer`});
      this.meta.updateTag({ name: 'keywords', content: 'birthday, photos' });
      this.meta.addTag({name: 'location', content: 'Columbus, USA'});
   })
  }
}
