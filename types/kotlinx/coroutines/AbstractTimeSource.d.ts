import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AbstractTimeSource extends Object {
    constructor()
    currentTimeMillis(): number;
    nanoTime(): number;
    parkNanos(blocker: Object, nanos: number): void;
    registerTimeLoopThread(): void;
    trackTask(): void;
    unTrackTask(): void;
    unpark(thread: Thread): void;
    unregisterTimeLoopThread(): void;
    wrapTask(block: () => void): () => void;
}