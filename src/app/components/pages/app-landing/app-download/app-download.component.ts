import { Component, OnInit } from '@angular/core';
class Image {
    img: string;
}
class Content {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    button1: string;
    button2: string;
}
@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    appDownloadImage: Image[] = [
        {
            img: 'assets/img/why-choose.png'
        }
    ];
    appDownloadContent: Content[] = [
        {
            title: 'Download Our Apps Today',
            paragraph1: 'Our app are designed at its easy as 5 steps',
            paragraph2: 'Book now! To grab some of our promos, voucher code, discounts, reward points.',
            paragraph3: 'Help our professionals by choosing their at the same time book a service.',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
