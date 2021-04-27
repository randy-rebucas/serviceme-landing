import { Component, OnInit } from '@angular/core';
class Content {
    icon: string;
    title: string;
    subTitle: string;
}

@Component({
    selector: 'app-app-funfacts',
    templateUrl: './app-funfacts.component.html',
    styleUrls: ['./app-funfacts.component.scss']
})
export class AppFunfactsComponent implements OnInit {

    funFacts: Content[] = [
        {
            icon: 'las la-user-circle',
            title: '400k',
            subTitle: 'Users'
        },
        {
            icon: 'las la-smile',
            title: '300K',
            subTitle: 'Happy Users'
        },
        {
            icon: 'las la-star',
            title: '100K',
            subTitle: 'Reviews'
        },
        {
            icon: 'las la-cloud-download-alt',
            title: '600k',
            subTitle: 'App Downloads'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
