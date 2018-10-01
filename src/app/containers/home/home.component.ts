import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    title = 'Jobz'

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.http.get('https://randomuser.me/api/?results=50')
            .subscribe(data => {
                console.log('DATA: ', data);
            });
    }
}
