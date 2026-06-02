import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__TransformKt extends Object {
    static chunked(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static filter(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>, paramarg1: KClass<Object>): Flow<Object>;
    static filterNot(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static filterNotNull(paramarg0: Flow<Object>): Flow<Object>;
    static map(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static mapNotNull(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static onEach(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static runningFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static runningReduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static scan(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static withIndex(paramarg0: Flow<Object>): Flow<Object>;
}