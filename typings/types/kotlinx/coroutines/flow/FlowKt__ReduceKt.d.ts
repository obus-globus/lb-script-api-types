import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ReduceKt extends Object {
    static first<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static first<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static firstOrNull<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static firstOrNull<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static fold<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: R, paramarg2: (param0: Object, param1: Object, param2: Object) => Object, paramarg3: Continuation<Object>): Object;
    static last<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static lastOrNull<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static reduce<S extends unknown, T extends S>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object, paramarg2: Continuation<Object>): Object;
    static single<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static singleOrNull<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
}