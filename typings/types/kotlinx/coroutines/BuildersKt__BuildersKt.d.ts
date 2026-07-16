import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
export class BuildersKt__BuildersKt extends Object {
    static runBlocking<T extends unknown>(paramarg0: CoroutineContext, paramarg1: (param0: Object, param1: Object) => Object): T;
    static runBlockingImpl<T extends unknown>(paramarg0: CoroutineContext, paramarg1: EventLoop, paramarg2: (param0: Object, param1: Object) => Object): T;
}