import type { TimeoutFuture } from '../../../../../com/google/common/util/concurrent/TimeoutFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TimeoutFuture$Fire<V extends unknown> extends Object implements Runnable {
    constructor(timeoutFuture: TimeoutFuture<V>)
    // private timeoutFutureRef: TimeoutFuture<V>;
    run(): void;
}