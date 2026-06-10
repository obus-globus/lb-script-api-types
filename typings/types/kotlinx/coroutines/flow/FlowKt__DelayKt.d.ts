import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__DelayKt extends Object {
    static debounce(paramarg0: Flow<Object>, paramarg1: (param0: Object) => number): Flow<Object>;
    static debounce(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
// (invalid TS: name contains '-')     static debounce-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static debounceDuration(paramarg0: Flow<Object>, paramarg1: (param0: Object) => Duration): Flow<Object>;
    static fixedPeriodTicker(paramarg0: CoroutineScope, paramarg1: number): ReceiveChannel<void>;
    static sample(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
// (invalid TS: name contains '-')     static sample-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
// (invalid TS: name contains '-')     static timeout-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
}