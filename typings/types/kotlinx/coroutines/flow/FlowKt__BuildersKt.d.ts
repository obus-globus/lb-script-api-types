import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__BuildersKt extends Object {
    static asFlow(paramarg0: Object | null): Flow<Object>;
    static asFlow(paramarg0: (Object | null)[]): Flow<Object>;
    static asFlow(paramarg0: Iterator<Object>): Flow<Object>;
    static asFlow(paramarg0: () => Object | null): Flow<Object>;
    static asFlow(paramarg0: (param0: Object) => Object): Flow<Object>;
    static asFlow(paramarg0: Sequence<Object>): Flow<Object>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static callbackFlow(paramarg0: (param0: Object, param1: Object) => Object): Flow<Object>;
    static channelFlow(paramarg0: (param0: Object, param1: Object) => Object): Flow<Object>;
    static emptyFlow(): Flow<Object>;
    static flow(paramarg0: (param0: Object, param1: Object) => Object): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
}