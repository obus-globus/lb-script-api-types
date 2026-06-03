import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class SelectOldKt extends Object {
    static selectOld(paramarg0: (param0: Object | null) => void, paramarg1: Continuation<Object>): Object;
    static selectUnbiasedOld(paramarg0: (param0: Object | null) => void, paramarg1: Continuation<Object>): Object;
}