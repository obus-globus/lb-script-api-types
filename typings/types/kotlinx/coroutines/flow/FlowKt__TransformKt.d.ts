import type { Object } from '../../../java/lang/Object.d.ts'
import type { IndexedValue } from '../../../kotlin/collections/IndexedValue.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__TransformKt extends Object {
    static chunked(paramarg0: Flow<Object>, paramarg1: number): Flow<(Object | null)[]>;
    static filter(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>, paramarg1: KClass<Object>): Flow<Object>;
    static filterNot(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static filterNotNull(paramarg0: Flow<Object>): Flow<Object>;
    static map(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static mapNotNull(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static onEach(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static runningFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static runningReduce(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static scan(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static withIndex(paramarg0: Flow<Object>): Flow<IndexedValue<Object>>;
}