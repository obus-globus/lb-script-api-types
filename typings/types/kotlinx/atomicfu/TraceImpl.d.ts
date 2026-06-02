import type { AtomicInteger } from '../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
import type { TraceFormat } from '../../kotlinx/atomicfu/TraceFormat.d.ts'
export class TraceImpl extends TraceBase {
    constructor(size: number, format: TraceFormat)
    // private format: TraceFormat;
    // private index: AtomicInteger;
    // private mask: number;
    // private size: number;
    // private trace: (Object | null)[];
    append(event: Object): void;
    append(event1: Object, event2: Object): void;
    append(event1: Object, event2: Object, event3: Object): void;
    append(event1: Object, event2: Object, event3: Object, event4: Object): void;
    toString(): string;
}