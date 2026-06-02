import type { CountDownLatch } from '../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
export class TaskQueue$AwaitIdleTask extends Task {
    constructor()
    readonly latch: CountDownLatch;
    runOnce(): number;
}