import { Component, OnInit } from '@angular/core';

class SectionTitleContent {
    title: string;
    paragraphText: string;
}
class Content {
    title: string;
    paragraph: string;
}

@Component({
    selector: 'app-app-faq',
    templateUrl: './app-faq.component.html',
    styleUrls: ['./app-faq.component.scss']
})
export class AppFaqComponent implements OnInit {
    sectionTitle: SectionTitleContent[] = [
        {
            title: 'Frequently Asked Questions',
            paragraphText: ''
        }
    ];
    accordionItem: Content[] = [
        {
            title: 'What are the requirements that I should present to you for me to become one of the verified professionals?',
            paragraph: 'You will be asked to join/attend our orientation for you to know more about our objectives and rules. And we will ask you to present a valid ID and your active mobile number.'
        },
        {
            title: 'Since there are checkpoints and curfew because of the pandemic, will you provide us a proof to present to the authority?',
            paragraph: 'Yes, we will give you Certificate of Employment. But this Certificate will only be given to verified professionals.'
        },
        {
            title: 'How about the cost for my transportation, Would that be included in the price?',
            paragraph: 'That will depend on you. You can add the transportation fee and just inform the customer or just inform the customer that your offer does not include the transportation fee yet.'
        },
        {
            title: 'What if I have two skills, I am a Therapist and Nail Technician as well. Can I offer both services to the customers?',
            paragraph: 'You can make unlimited offers, as long as you are really a pro on those skills.'
        },
        {
            title: 'How will I know if a customer booked for my service?',
            paragraph: 'You will receive a notification from the app informing that you have one or more pending bookings. But make sure that you have enough balance on your wallet to accept the booking/s.'
        },
        {
            title: 'I am an apple user and I cannot search for the app. What can I do?',
            paragraph: 'For the meantime, the app is only available on Play Store but our team is currently working on it so we could also be available on App Store.'
        },
        {
            title: 'How are we going to cash in some money on our wallet?',
            paragraph: 'You can cash in thru Paypal and other Remittance Center (Palawan Express, Cebuana).'
        },
        {
            title: 'What if I want to work with you for full time?',
            paragraph: 'You will have to become a probationary for the first 5 months before becoming a regular who will get the company’s benefits.'
        },
        {
            title: 'How much would be your commission from our services?',
            paragraph: 'We will only deduct 20% commission from your offers, which will serve as a fee for using our mobile app to get customers.'
        },
        {
            title: 'What if I don’t have any money on my Wallet, will I still be able to be booked by a customer?',
            paragraph: 'Yes, they can still book for your services but you will not be able to accept the booking until you add load to your wallet.'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }


}
