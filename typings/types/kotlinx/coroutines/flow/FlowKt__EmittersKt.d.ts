import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__EmittersKt extends Object {
    static ensureActive(paramarg0: FlowCollector<Object>): void;
    static onCompletion(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static onEmpty(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static onStart(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static transform(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static unsafeTransform(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
}