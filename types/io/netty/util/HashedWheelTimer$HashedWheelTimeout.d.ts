import type { HashedWheelTimer } from '../../../io/netty/util/HashedWheelTimer.d.ts'
import type { HashedWheelTimer$HashedWheelBucket } from '../../../io/netty/util/HashedWheelTimer$HashedWheelBucket.d.ts'
import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Timer } from '../../../io/netty/util/Timer.d.ts'
import type { TimerTask } from '../../../io/netty/util/TimerTask.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashedWheelTimer$HashedWheelTimeout extends Object implements Timeout, Runnable {
    constructor(arg0: HashedWheelTimer, arg1: TimerTask, arg2: number)
    // private bucket: HashedWheelTimer$HashedWheelBucket;
    // private deadline: number;
    // private next: HashedWheelTimer$HashedWheelTimeout;
    // private prev: HashedWheelTimer$HashedWheelTimeout;
    // private remainingRounds: number;
    // private state: number;
    // private task: TimerTask;
    // private timer: HashedWheelTimer;
    cancel(): boolean;
    compareAndSetState(arg0: number, arg1: number): boolean;
    expire(): void;
    isCancelled(): boolean;
    isExpired(): boolean;
    // private remove(): void;
    removeAfterCancellation(): void;
    run(): void;
    state(): number;
    task(): TimerTask;
    timer(): Timer;
    toString(): string;
}