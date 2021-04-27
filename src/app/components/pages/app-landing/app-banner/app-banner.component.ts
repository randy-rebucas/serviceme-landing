import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.scss']
})
export class AppBannerComponent implements OnInit {

    mainBannerContent: Content[] = [
        {
            title: 'cutsonwheel - one stop Personal Grooming Services',
            paragraph: 'Registered on-the-go grooming service that offers a wide range of home services to the customers. Services that are offered at most of the salons and spa. We also aim to give opportunity to the professionals and give convenience to the customers. We have huge number of professionals from any places in Philippines that\'s always ready to serve you anytime and anywhere.',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ];
    bannerImage: Image[] = [
        {
            img: 'assets/img/app-banner.png'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
class Content {
    title: string;
    paragraph: string;
    button1: string;
    button2: string;
}
class Image {
    img: string;
}
