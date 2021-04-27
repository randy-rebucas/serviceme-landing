import { Component, OnInit } from '@angular/core';
class Text {
    text: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    copyrightText: Text[] = [
        {
            text: 'cutsonwheel @ 2019'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
