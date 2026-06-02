import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
export class ThreadLocalEventLoop extends Object {
    static INSTANCE: ThreadLocalEventLoop;
    /*not mapped: */ getEventLoop$kotlinx_coroutines_core(): EventLoop;
    // private ref: ThreadLocal<EventLoop>;
    currentOrNull(): EventLoop | null;
    resetEventLoop(): void;
    setEventLoop(eventLoop: EventLoop): void;
}