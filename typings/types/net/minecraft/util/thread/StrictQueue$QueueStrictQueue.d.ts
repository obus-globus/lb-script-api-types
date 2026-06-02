import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StrictQueue } from '../../../../net/minecraft/util/thread/StrictQueue.d.ts'
export class StrictQueue$QueueStrictQueue extends Object implements StrictQueue<() => void> {
    constructor(queue: () => void[])
    // private queue: () => void[];
    isEmpty(): boolean;
    pop(): () => void;
    push(t: () => void): boolean;
    size(): number;
}