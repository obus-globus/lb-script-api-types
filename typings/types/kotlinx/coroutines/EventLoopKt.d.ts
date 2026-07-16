import type { Object } from '../../java/lang/Object.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
export class EventLoopKt extends Object {
    static createEventLoop(): EventLoop;
    static platformAutoreleasePool(block: () => void): void;
}