import type { ListenerCallQueue$Event } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue$Event.d.ts'
import type { ListenerCallQueue$PerListenerQueue } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue$PerListenerQueue.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListenerCallQueue<L extends unknown> extends Object {
    constructor()
    // private listeners: ListenerCallQueue$PerListenerQueue<L>[];
    addListener(listener: L, executor: Executor): void;
    dispatch(): void;
    enqueue(event: ListenerCallQueue$Event<L>): void;
    enqueue(event: ListenerCallQueue$Event<L>, label: string): void;
    // private enqueueHelper(event: ListenerCallQueue$Event<L>, label: Object): void;
}