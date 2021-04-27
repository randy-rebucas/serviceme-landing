import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-about',
    templateUrl: './app-about.component.html',
    styleUrls: ['./app-about.component.scss']
})
export class AppAboutComponent implements OnInit {

    aboutImage: Image[] = [
        {
            img: 'assets/img/app-about.png'
        }
    ];
    aboutContent = [
        {
            title: 'Cutsonwheel Mobile App Makes Your Life Very Easier',
            paragraphList: [
                {
                    paragraph: 'Your salon in now in your finger tips',
                },
                {
                    paragraph: 'Services that are offered at most of the salons and spa. We also aim to give opportunity to the professionals and give convenience to the customers. We have 131 professionals and counting, that\'s always ready to serve you anytime and anywhere.',
                }
            ],
            featuresList: [
                {
                    itemIcon: 'las la-check',
                    item: 'Massage Therapist'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Makeup Artist'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Barbers'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'All around Beauticians'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Nail Technicians'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Hair Technicians'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Hairdressers'
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}

class Image {
    img: string;
}
