import type { LeakPresenceDetector$ResourceScope } from '../../../io/netty/util/LeakPresenceDetector$ResourceScope.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LeakPresenceDetector$PresenceTracker<T extends unknown> extends AtomicBoolean implements ResourceLeakTracker<T> {
    constructor(arg0: LeakPresenceDetector$ResourceScope)
    // private scope: LeakPresenceDetector$ResourceScope;
    close(arg0: Object): boolean;
    getCloseStackTraceIfAny(): Throwable;
    record(): void;
    record(arg0: Object): void;
}