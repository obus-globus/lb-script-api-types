import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__DelayKt extends Object {
    static debounce(paramarg0: Flow<Object>, paramarg1: Function1<Object, number>): Flow<Object>;
    static debounce(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
//     static debounce-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -    static debounceDuration(paramarg0: Flow<Object>, paramarg1: Function1<Object, Duration>): Flow<Object>;
    static fixedPeriodTicker(paramarg0: CoroutineScope, paramarg1: number): ReceiveChannel<void>;
    static sample(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
//     static sample-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -//     static timeout-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -}