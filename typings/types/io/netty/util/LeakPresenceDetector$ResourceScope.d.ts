import type { JavaMap } from '../../../JavaMap.d.ts'
import type { LeakPresenceDetector$PresenceTracker } from '../../../io/netty/util/LeakPresenceDetector$PresenceTracker.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LeakPresenceDetector$ResourceScope extends Object implements Closeable {
    constructor(arg0: string)
    // private closed: number;
    // private creationStacks: JavaMap<LeakPresenceDetector$PresenceTracker<Object>, Throwable>;
    // private name: string;
    // private openResourceCounter: LongAdder;
    check(): void;
    checkOpen(): void;
    close(): void;
    hasOpenResources(): boolean;
}