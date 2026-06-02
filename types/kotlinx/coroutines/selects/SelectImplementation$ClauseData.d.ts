import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SelectImplementation } from '../../../kotlinx/coroutines/selects/SelectImplementation.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class SelectImplementation$ClauseData extends Object {
    constructor(null_: SelectImplementation$ClauseData, clauseObject: Object, regFunc: Function3<Object, SelectInstance<Object>, Object, void>, processResFunc: Function3<Object, Object, Object, Object>, param: Object | null, block: Object, onCancellationConstructor: Function3<SelectInstance<Object>, Object, Object, Function3<Throwable, Object, CoroutineContext, void>> | null)
    // private block: Object;
    clauseObject: Object;
    disposableHandleOrSegment: Object | null;
    indexInSegment: number;
    onCancellationConstructor: (param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => Function3<Throwable, Object, CoroutineContext, void>;
    // private param: Object | null;
    // private processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null;
    // private regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void;
    createOnCancellationAction(select: SelectInstance<Object>, internalResult: Object | null): Function3<Throwable, Object, CoroutineContext, void> | null;
    dispose(): void;
    invokeBlock<R extends Object | number | string | boolean>(argument: Object | null): R;
    processResult(result: Object | null): Object | null;
    tryRegisterAsWaiter(select: SelectImplementation<R>): boolean;
}