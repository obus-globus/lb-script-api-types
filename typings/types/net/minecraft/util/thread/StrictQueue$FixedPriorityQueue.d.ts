import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StrictQueue } from '../../../../net/minecraft/util/thread/StrictQueue.d.ts'
import type { StrictQueue$RunnableWithPriority } from '../../../../net/minecraft/util/thread/StrictQueue$RunnableWithPriority.d.ts'
export class StrictQueue$FixedPriorityQueue extends Object implements StrictQueue<StrictQueue$RunnableWithPriority> {
    constructor(size: number)
    // private queues: () => void[][];
    // private size: AtomicInteger;
    isEmpty(): boolean;
    pop(): () => void;
    push(task: StrictQueue$RunnableWithPriority): boolean;
    size(): number;
}