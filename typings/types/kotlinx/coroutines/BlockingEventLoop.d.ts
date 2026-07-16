import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { EventLoopImplBase } from '../../kotlinx/coroutines/EventLoopImplBase.d.ts'
export class BlockingEventLoop extends EventLoopImplBase {
    static Key: ContinuationInterceptor$Key;
    constructor(thread: Thread)
    // private thread: Thread;
    // private /*not mapped: */ getThread(): Thread;
}