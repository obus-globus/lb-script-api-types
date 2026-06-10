import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ZipKt extends Object {
    static combine(paramarg0: Flow<Object>[], paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static combine(paramarg0: Object | null, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object) => Object): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>[], paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Object | null, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object) => Object): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object, param6: Object) => Object): Flow<Object>;
    static flowCombine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static flowCombineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<Object>;
    static zip(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}