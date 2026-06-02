import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
export class TraceBase extends Object {
    constructor()
    append(event: Object): void;
    append(event1: Object, event2: Object): void;
    append(event1: Object, event2: Object, event3: Object): void;
    append(event1: Object, event2: Object, event3: Object, event4: Object): void;
    invoke(event: Function0<Object>): void;
}