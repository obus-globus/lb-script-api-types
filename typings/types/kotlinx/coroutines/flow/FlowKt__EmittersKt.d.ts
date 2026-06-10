import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__EmittersKt extends Object {
    static ensureActive(paramarg0: FlowCollector<Object>): void;
    static onCompletion(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static onEmpty(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static onStart(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static transform(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static unsafeTransform(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}