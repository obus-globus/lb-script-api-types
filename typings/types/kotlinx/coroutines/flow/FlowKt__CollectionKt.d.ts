import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__CollectionKt extends Object {
    static associate(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateBy(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateBy(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateByTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateByTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: (param0: Object, param1: Object) => Object, paramarg4: Continuation<Object>): Object;
    static associateTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static associateWith(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static associateWithTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupBy(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupBy(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static groupByTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: Continuation<Object>): Object;
    static groupByTo(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => Object, paramarg3: (param0: Object, param1: Object) => Object, paramarg4: Continuation<Object>): Object;
    static toCollection(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toList(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
    static toSet(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
}