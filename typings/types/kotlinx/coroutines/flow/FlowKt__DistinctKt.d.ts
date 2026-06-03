import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__DistinctKt extends Object {
    static distinctUntilChanged(paramarg0: Flow<Object>): Flow<Object>;
    static distinctUntilChanged(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => boolean): Flow<Object>;
    static distinctUntilChangedBy(paramarg0: Flow<Object>, paramarg1: (param0: Object | null) => Object | null): Flow<Object>;
}