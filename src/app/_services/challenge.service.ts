import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from './challengeData.json';

import { Challenge } from '../_models/challenge';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
    private challengeSubject: BehaviorSubject<Challenge[]>;

    listOfChallenges: any = (data as any).default;

    constructor(private http: HttpClient) {
        this.challengeSubject = new BehaviorSubject<Challenge[]>(this.listOfChallenges);
    }

    getAllChallenges(){
        return this.challengeSubject.value;
    }

    updateAllChallenges(list){
        this.challengeSubject.next(list);
    }
    
}