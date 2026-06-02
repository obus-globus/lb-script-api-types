import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__BuildersKt extends Object {
    static asFlow(paramarg0: Object | null): Flow<Object>;
    static asFlow(paramarg0: (Object | null)[]): Flow<Object>;
    static asFlow(paramarg0: Iterator<Object>): Flow<Object>;
    static asFlow(paramarg0: Function0<Object>): Flow<Object>;
    static asFlow(paramarg0: Function1<Object, Object>): Flow<Object>;
    static asFlow(paramarg0: Sequence<Object>): Flow<Object>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static callbackFlow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static channelFlow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static emptyFlow(): Flow<Object>;
    static flow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
}