import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__EmittersKt extends Object {
    static ensureActive(paramarg0: FlowCollector<Object>): void;
    static onCompletion(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static onEmpty(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static onStart(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static transform(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static unsafeTransform(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
}