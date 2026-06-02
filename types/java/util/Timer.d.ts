import type { Cleaner$Cleanable } from '../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { TaskQueue } from '../../java/util/TaskQueue.d.ts'
import type { TimerTask } from '../../java/util/TimerTask.d.ts'
import type { TimerThread } from '../../java/util/TimerThread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Timer extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private cleanup: Cleaner$Cleanable;
    // private queue: TaskQueue;
    // private thread: TimerThread;
    cancel(): void;
    purge(): number;
    // private sched(arg0: TimerTask, arg1: number, arg2: number): void;
    schedule(arg0: TimerTask, arg1: Date): void;
    schedule(arg0: TimerTask, arg1: Date, arg2: number): void;
    schedule(arg0: TimerTask, arg1: number): void;
    schedule(arg0: TimerTask, arg1: number, arg2: number): void;
    scheduleAtFixedRate(arg0: TimerTask, arg1: Date, arg2: number): void;
    scheduleAtFixedRate(arg0: TimerTask, arg1: number, arg2: number): void;
}