import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-team',
    templateUrl: './app-team.component.html',
    styleUrls: ['./app-team.component.scss']
})
export class AppTeamComponent implements OnInit {

    sectionTitle: SectionTitleContent[] = [
        {
            title: 'Our Expert Team',
            paragraphText: 'This are the people behind cutsonwheel that gives professionals better work experience.'
        }
    ]
    singleTeamBox = [
        {
            img: 'assets/img/team/team1.jpg',
            title: 'Randy Rebucas',
            designation: 'CEO & Founder',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://www.facebook.com/randycrebucas'
                },
                {
                    icon: 'lab la-twitter',
                    link: 'https://twitter.com/rebucas_randy'
                },
                {
                    icon: 'lab la-linkedin-in',
                    link: 'https://www.linkedin.com/in/randy-rebucas-1a896943/'
                }
            ]
        },
        {
            img: 'assets/img/team/team2.jpg',
            title: 'Rithelle Rebucas',
            designation: 'Co-Founder',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://www.facebook.com/Baybayanun'
                }
            ]
        },
        {
            img: 'assets/img/team/team3.jpg',
            title: 'Ferna Mae Fernandez',
            designation: 'Marketing Director',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://www.facebook.com/fyrnzki'
                }
            ]
        },
        {
            img: 'assets/img/team/team4.jpg',
            title: 'Charmaine Klein Mirasol',
            designation: 'Social Media Expert',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://www.facebook.com/charmaine.klein.505'
                },
                {
                    icon: 'lab la-instagram',
                    link: 'https://www.instagram.com/_chawmeyn/'
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}

class SectionTitleContent {
    title: string;
    paragraphText: string;
}
