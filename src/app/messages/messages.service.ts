import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';


@Injectable()
export class MessagesService {

    private subject = new BehaviorSubject<string[]>([]);

    errors$: Observable<string[]> = this.subject.asObservable()
        .pipe(
            filter(messages => messages && messages.length > 0)
        );

    constructor() {
        console.log("Message service created...")
    }

    showErrors(...errors: string[]) {
        // ? errors = ['error1','error2']
        this.subject.next(errors);
    }

}
