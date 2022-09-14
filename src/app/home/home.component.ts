import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('this is home page');
    this.meta.updateTag({ name: 'description', content: 'Homepage description' });
    this.meta.updateTag({ property: 'og:title', content: `this is home page`});
    this.meta.updateTag({ property: 'og:description', content: `Homepage description`});
    this.meta.updateTag({ name: 'keywords', content: 'birthday, photos, portrait, camera, photography' });
    this.meta.addTag({name: 'location', content: 'Lahore, Pakistan'});
  }

}
