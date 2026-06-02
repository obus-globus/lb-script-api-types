import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { ForkJoinPool$ManagedBlocker } from '../../../java/util/concurrent/ForkJoinPool$ManagedBlocker.d.ts'
import type { Phaser } from '../../../java/util/concurrent/Phaser.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Phaser$QNode extends Object implements ForkJoinPool$ManagedBlocker {
    constructor(arg0: Phaser, arg1: number, arg2: boolean, arg3: boolean, arg4: number)
    // private deadline: number;
    // private interruptible: boolean;
    // private nanos: number;
    // private next: Phaser$QNode;
    // private phase: number;
    // private phaser: Phaser;
    // private thread: Thread;
    // private timed: boolean;
    // private wasInterrupted: boolean;
    block(): boolean;
    isReleasable(): boolean;
}