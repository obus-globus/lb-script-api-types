import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__CollectionKt extends Object {
    static associate<T extends unknown, K extends unknown, V extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateBy<T extends unknown, K extends unknown, V extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateBy<T extends unknown, K extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateByTo<T extends unknown, K extends unknown, M extends Map<Object, Object>>(paramarg0: Flow<T>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateByTo<T extends unknown, K extends unknown, V extends unknown, M extends Map<Object, Object>>(paramarg0: Flow<T>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: (param0: Object, param1: Object) => Object, paramarg4: Continuation<Object>): Object;
    static associateTo<T extends unknown, K extends unknown, V extends unknown, M extends Map<Object, Object>>(paramarg0: Flow<T>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateWith<K extends unknown, V extends unknown>(paramarg0: Flow<K>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateWithTo<K extends unknown, V extends unknown, M extends Map<Object, Object>>(paramarg0: Flow<K>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupBy<T extends unknown, K extends unknown, V extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupBy<T extends unknown, K extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static groupByTo<T extends unknown, K extends unknown, M extends Map<Object, T[]>>(paramarg0: Flow<T>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupByTo<T extends unknown, K extends unknown, V extends unknown, M extends Map<Object, V[]>>(paramarg0: Flow<T>, paramarg1: M, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: (param0: Object, param1: Object) => Object, paramarg4: Continuation<Object>): Object;
    static toCollection<T extends unknown, C extends Object[]>(paramarg0: Flow<T>, paramarg1: C, paramarg2: Continuation<Object>): Object;
    static toList<T extends unknown>(paramarg0: Flow<T>, paramarg1: T[], paramarg2: Continuation<Object>): Object;
    static toSet<T extends unknown>(paramarg0: Flow<T>, paramarg1: T[], paramarg2: Continuation<Object>): Object;
}