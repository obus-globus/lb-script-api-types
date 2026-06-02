import type { Object } from '../../java/lang/Object.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
export class NamedTrace extends TraceBase {
    constructor(trace: TraceBase, name: string)
    // private name: string;
    // private trace: TraceBase;
    append(event: Object): void;
    append(event1: Object, event2: Object): void;
    append(event1: Object, event2: Object, event3: Object): void;
    append(event1: Object, event2: Object, event3: Object, event4: Object): void;
    toString(): string;
}