import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MergeKt extends Object {
    static flatMapConcat<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static flatMapLatest<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static flatMapMerge<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => Object): Flow<R>;
    static flattenConcat<T extends unknown>(paramarg0: Flow<Flow<T>>): Flow<T>;
    static flattenMerge<T extends unknown>(paramarg0: Flow<Flow<T>>, paramarg1: number): Flow<T>;
    static getDEFAULT_CONCURRENCY(): number;
    static mapLatest<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static merge<T extends unknown>(paramarg0: Flow<T>[]): Flow<T>;
    static merge<T extends unknown>(...paramarg0: Flow<T>[]): Flow<T>;
    static transformLatest<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
}