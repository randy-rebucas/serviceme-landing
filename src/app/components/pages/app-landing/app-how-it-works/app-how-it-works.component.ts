import { Component, OnInit } from '@angular/core';
class Content {
    title: string;
    videoLink: string;
}

@Component({
    selector: 'app-app-how-it-works',
    templateUrl: './app-how-it-works.component.html',
    styleUrls: ['./app-how-it-works.component.scss']
})
export class AppHowItWorksComponent implements OnInit {

    videoContent: Content[] = [
        {
            title: 'How it Works?',
            videoLink: 'https://www.youtube.com/watch?v=JJXF_kBPFPo'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }


}
