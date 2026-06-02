import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashedWheelTimer$Worker extends Object implements Runnable {
    private constructor(null_: HashedWheelTimer$Worker)
    // private tick: number;
    // private unprocessedTimeouts: Timeout[];
    // private processCancelledTasks(): void;
    run(): void;
    // private transferTimeoutsToBuckets(): void;
    unprocessedTimeouts(): Timeout[];
    // private waitForNextTick(): number;
}