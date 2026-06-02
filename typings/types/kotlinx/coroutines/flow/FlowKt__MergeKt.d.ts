import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MergeKt extends Object {
    static flatMapConcat(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatMapLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatMapMerge(paramarg0: Flow<Object>, paramarg1: number, paramarg2: Function2<Object, Object, Object>): Flow<Object>;
    static flattenConcat(paramarg0: Flow<Object>): Flow<Object>;
    static flattenMerge(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static getDEFAULT_CONCURRENCY(): number;
    static mapLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static merge(paramarg0: (Object | null)[]): Flow<Object>;
    static merge(paramarg0: Object | null): Flow<Object>;
    static transformLatest(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
}