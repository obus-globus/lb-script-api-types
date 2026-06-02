import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
export class EventLoopImplBase$DelayedRunnableTask extends EventLoopImplBase$DelayedTask {
    constructor(nanoTime: number, block: () => void)
    // private block: () => void;
    run(): void;
    toString(): string;
}