import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class SelectClause2Impl<P extends Object | number | string | boolean, Q extends Object | number | string | boolean> extends Object implements SelectClause2<P, Q> {
    constructor(clauseObject: Object, regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void, processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null, onCancellationConstructor: (param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => (param0: Throwable, param1: Object | null, param2: CoroutineContext) => void | null)
    readonly clauseObject: Object;
    readonly onCancellationConstructor: (param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => (param0: Throwable, param1: Object | null, param2: CoroutineContext) => void;
    readonly processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null;
    readonly regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void;
}