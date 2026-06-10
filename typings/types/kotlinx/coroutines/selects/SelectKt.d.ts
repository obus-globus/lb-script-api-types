import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class SelectKt extends Object {
    static getPARAM_CLAUSE_0(): Symbol;
    static select(paramarg0: (param0: Object) => void, paramarg1: Continuation<Object>): Object;
}