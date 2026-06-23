import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
export class BlockingCoroutine<T extends unknown> extends AbstractCoroutine<T> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, blockedThread: Thread, eventLoop: EventLoop | null)
    // private blockedThread: Thread;
    // private eventLoop: EventLoop | null;
    // private /*not mapped: */ isScopedCoroutine(): boolean;
    protected afterCompletion(state: Object | null): void;
    joinBlocking(): T;
}