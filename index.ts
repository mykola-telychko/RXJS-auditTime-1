import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

//https://www.learnrxjs.io/learn-rxjs/operators/filtering/audittime

// Create observable that emits click events
const source = fromEvent(document, 'click');
// Emit clicks at a rate of at most one click per TWO second
// any click quantity in time pieces emit only once
const example = source.pipe(auditTime(2100));
// Output (example): '(1s) --- Clicked --- (1s) --- Clicked'
const subscribe = example.subscribe((val) => console.log('Clicked'));
