import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export interface SelectClause extends Object{
    readonly clauseObject: Object;
    readonly onCancellationConstructor: (param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => Function3<Throwable, Object, CoroutineContext, void>;
    readonly processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null;
    readonly regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void;
}