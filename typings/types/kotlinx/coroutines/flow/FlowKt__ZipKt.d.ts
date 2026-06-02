import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../../kotlin/jvm/functions/Function4.d.ts'
import type { Function5 } from '../../../kotlin/jvm/functions/Function5.d.ts'
import type { Function6 } from '../../../kotlin/jvm/functions/Function6.d.ts'
import type { Function7 } from '../../../kotlin/jvm/functions/Function7.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ZipKt extends Object {
    static combine(paramarg0: (Object | null)[], paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Object | null, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: (Object | null)[], paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Object | null, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function7<Object, Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static flowCombine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static flowCombineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static zip(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
}