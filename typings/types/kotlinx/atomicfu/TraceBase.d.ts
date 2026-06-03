import type { Object } from '../../java/lang/Object.d.ts'
export class TraceBase extends Object {
    constructor()
    append(event: Object): void;
    append(event1: Object, event2: Object): void;
    append(event1: Object, event2: Object, event3: Object): void;
    append(event1: Object, event2: Object, event3: Object, event4: Object): void;
    invoke(event: () => Object): void;
}