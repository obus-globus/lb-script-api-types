import type { Delayed } from '../../java/util/concurrent/Delayed.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TimerQueue$DelayedTimer extends Object implements Delayed {
    constructor(arg0: Timer, arg1: number)
    // private sequenceNumber: number;
    // private time: number;
    // private timer: Timer;
    compareTo(arg0: Delayed): number;
    getDelay(arg0: TimeUnit): number;
    getTimer(): Timer;
    setTime(arg0: number): void;
}