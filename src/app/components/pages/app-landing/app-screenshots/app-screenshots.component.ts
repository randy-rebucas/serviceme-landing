import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-screenshots',
    templateUrl: './app-screenshots.component.html',
    styleUrls: ['./app-screenshots.component.scss']
})
export class AppScreenshotsComponent implements OnInit {

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'App Screenshots',
            paragraphText: ''
        }
    ];
    screenshotImage: Image[] = [
        {
            img: 'assets/img/screenshot/1.png'
        },
        {
            img: 'assets/img/screenshot/2.png'
        },
        {
            img: 'assets/img/screenshot/3.png'
        },
        {
            img: 'assets/img/screenshot/4.png'
        },
        {
            img: 'assets/img/screenshot/5.png'
        },
        {
            img: 'assets/img/screenshot/6.png'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}