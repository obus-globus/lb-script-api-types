import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ZipKt extends Object {
    static combine(paramarg0: (Object | null)[], paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static combine(paramarg0: Object | null, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null) => Object | null): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null, param5: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: (Object | null)[], paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: Object | null, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null, param5: Object | null) => Object | null): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null, param5: Object | null, param6: Object | null) => Object | null): Flow<Object>;
    static flowCombine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static flowCombineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Flow<Object>;
    static zip(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
}