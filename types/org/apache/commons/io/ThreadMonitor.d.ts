import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThreadMonitor extends Object implements Runnable {
    private constructor(arg0: Thread, arg1: Duration)
    // private thread: Thread;
    // private timeout: Duration;
    run(): void;
}