import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
export class EventLoopKt extends Object {
    static createEventLoop(): EventLoop;
    static isIoDispatcherThread(paramarg0: Thread): boolean;
    static platformAutoreleasePool(paramarg0: () => void): void;
    static processNextEventInCurrentThread(): number;
    static runSingleTaskFromCurrentSystemDispatcher(): number;
}