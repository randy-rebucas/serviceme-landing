import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-features',
    templateUrl: './app-features.component.html',
    styleUrls: ['./app-features.component.scss']
})
export class AppFeaturesComponent implements OnInit {
    sectionTitle: SectionTitleContent[] = [
        {
            title: 'App Features',
            paragraphText: 'cutsonwheel supported with following features.'
        }
    ]
    singleAppFeatures: FeaturesContent[] = [
        {
            icon: 'las la-calendar',
            title: 'Appointment',
            paragraph: 'Simple and very easy process creating your appointment to our cerified professionals with cancelable option.'
        },
        {
            icon: 'las la-comment-alt',
            title: 'Assessment',
            paragraph: 'Communicating with professional at the same time on your favorate team are now easy with the use of our builin chat support.'
        },
        {
            icon: 'las la-map-marked-alt',
            title: 'Geolocation',
            paragraph: 'Track ang locate your professional if its in their way to your area are now easy with our Map Geolcation Navigator.'
        },
        {
            icon: 'las la-life-ring',
            title: 'Emergency Alarm',
            paragraph: 'Both Prof and Customer have this options that cab be be easy to trigger in times of difficulties and danger.'
        },
        {
            icon: 'las la-briefcase',
            title: 'Offers',
            paragraph: 'Offers are huge as we are one stop grooming services, There is a lot of choices inside in our platform.'
        },
        {
            icon: 'las la-camera',
            title: 'Unlimited Promos',
            paragraph: 'We also provide a lot promos as such as voucher code, discounts, reward points and more...'
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }


}
class SectionTitleContent {
    title : string;
    paragraphText : string;
}
class FeaturesContent {
    icon : string;
    title : string;
    paragraph : string;
}