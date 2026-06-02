import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Lock } from '../../java/util/concurrent/locks/Lock.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
import type { TimerQueue$DelayedTimer } from '../../javax/swing/TimerQueue$DelayedTimer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TimerQueue extends Object implements Runnable {
    static sharedInstance(): TimerQueue;
    constructor()
    // private queue: TimerQueue$DelayedTimer[];
    // private running: boolean;
    // private runningLock: Lock;
    addTimer(arg0: Timer, arg1: number): void;
    // private addTimer(arg0: TimerQueue$DelayedTimer): void;
    containsTimer(arg0: Timer): boolean;
    removeTimer(arg0: Timer): void;
    run(): void;
    startIfNeeded(): void;
    toString(): string;
}