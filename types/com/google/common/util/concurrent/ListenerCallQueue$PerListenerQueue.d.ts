import type { ListenerCallQueue$Event } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue$Event.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListenerCallQueue$PerListenerQueue<L extends Object | number | string | boolean> extends Object implements Runnable {
    constructor(listener: L, executor: Executor)
    // private executor: Executor;
    // private isThreadScheduled: boolean;
    // private labelQueue: Object[];
    // private listener: L;
    // private waitQueue: ListenerCallQueue$Event<L>[];
    add(event: ListenerCallQueue$Event<L>, label: Object): void;
    dispatch(): void;
    run(): void;
}