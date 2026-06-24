import type { HashedWheelTimer$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { HashedWheelTimer } from '../../../io/netty/util/HashedWheelTimer.d.ts'
import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashedWheelTimer$Worker extends Object implements Runnable {
    private constructor(null_: HashedWheelTimer)
    constructor(null_: HashedWheelTimer, arg1: HashedWheelTimer$1)
    // private tick: number;
    // private unprocessedTimeouts: Timeout[];
    // private processCancelledTasks(): void;
    run(): void;
    // private transferTimeoutsToBuckets(): void;
    unprocessedTimeouts(): Timeout[];
    // private waitForNextTick(): number;
}