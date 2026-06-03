import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
export class DelayKt extends Object {
    static awaitCancellation(paramarg0: Continuation<Object>): Object;
    static delay(paramarg0: number, paramarg1: Continuation<Object>): Object;
// (invalid TS: name contains '-')     static delay-VtjQ1oo(paramarg0: number, paramarg1: Continuation<Object>): Object;
    static getDelay(paramarg0: CoroutineContext): Delay;
// (invalid TS: name contains '-')     static toDelayMillis-LRDsOJo(paramarg0: number): number;
}