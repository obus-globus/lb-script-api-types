import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MergeKt extends Object {
    static flatMapConcat(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static flatMapLatest(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static flatMapMerge(paramarg0: Flow<Object>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => Object): Flow<Object>;
    static flattenConcat(paramarg0: Flow<Flow<Object>>): Flow<Object>;
    static flattenMerge(paramarg0: Flow<Flow<Object>>, paramarg1: number): Flow<Object>;
    static getDEFAULT_CONCURRENCY(): number;
    static mapLatest(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static merge(paramarg0: Flow<Object>[]): Flow<Object>;
    static merge(...paramarg0: Flow<Object>[]): Flow<Object>;
    static transformLatest(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}