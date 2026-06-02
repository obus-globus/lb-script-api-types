import type { HashedWheelTimer$HashedWheelBucket } from '../../../io/netty/util/HashedWheelTimer$HashedWheelBucket.d.ts'
import type { HashedWheelTimer$HashedWheelTimeout } from '../../../io/netty/util/HashedWheelTimer$HashedWheelTimeout.d.ts'
import type { HashedWheelTimer$Worker } from '../../../io/netty/util/HashedWheelTimer$Worker.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Timer } from '../../../io/netty/util/Timer.d.ts'
import type { TimerTask } from '../../../io/netty/util/TimerTask.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { CountDownLatch } from '../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashedWheelTimer extends Object implements Timer {
    static WORKER_STATE_INIT: number;
    static WORKER_STATE_SHUTDOWN: number;
    static WORKER_STATE_STARTED: number;
    constructor()
    constructor(arg0: ThreadFactory)
    constructor(arg0: ThreadFactory, arg1: number, arg2: TimeUnit)
    constructor(arg0: ThreadFactory, arg1: number, arg2: TimeUnit, arg3: number)
    constructor(arg0: ThreadFactory, arg1: number, arg2: TimeUnit, arg3: number, arg4: boolean)
    constructor(arg0: ThreadFactory, arg1: number, arg2: TimeUnit, arg3: number, arg4: boolean, arg5: number)
    constructor(arg0: ThreadFactory, arg1: number, arg2: TimeUnit, arg3: number, arg4: boolean, arg5: number, arg6: Executor)
    constructor(arg0: number, arg1: TimeUnit)
    constructor(arg0: number, arg1: TimeUnit, arg2: number)
    // private cancelledTimeouts: HashedWheelTimer$HashedWheelTimeout[];
    // private leak: ResourceLeakTracker<HashedWheelTimer>;
    // private mask: number;
    // private maxPendingTimeouts: number;
    // private pendingTimeouts: AtomicLong;
    // private startTime: number;
    // private startTimeInitialized: CountDownLatch;
    // private taskExecutor: Executor;
    // private tickDuration: number;
    // private timeouts: HashedWheelTimer$HashedWheelTimeout[];
    // private wheel: HashedWheelTimer$HashedWheelBucket[];
    // private worker: HashedWheelTimer$Worker;
    // private workerState: number;
    // private workerThread: Thread;
    finalize(): void;
    newTimeout(arg0: TimerTask, arg1: number, arg2: TimeUnit): Timeout;
    pendingTimeouts(): number;
    start(): void;
    stop(): Timeout[];
}