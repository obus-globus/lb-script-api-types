import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__DistinctKt extends Object {
    static distinctUntilChanged(paramarg0: Flow<Object>): Flow<Object>;
    static distinctUntilChanged(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, boolean>): Flow<Object>;
    static distinctUntilChangedBy(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
}