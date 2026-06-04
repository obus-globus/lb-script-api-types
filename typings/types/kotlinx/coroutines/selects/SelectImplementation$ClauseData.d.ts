import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SelectImplementation } from '../../../kotlinx/coroutines/selects/SelectImplementation.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class SelectImplementation$ClauseData extends Object {
    constructor(null_: SelectImplementation$ClauseData, clauseObject: Object, regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void, processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null, param: Object | null, block: Object, onCancellationConstructor: ((param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => (param0: Throwable, param1: Object | null, param2: CoroutineContext) => void) | null)
    // private block: Object;
    clauseObject: Object;
    disposableHandleOrSegment: Object | null;
    indexInSegment: number;
    onCancellationConstructor: ((param0: SelectInstance<Object>, param1: Object | null, param2: Object | null) => (param0: Throwable, param1: Object | null, param2: CoroutineContext) => void) | null;
    // private param: Object | null;
    // private processResFunc: (param0: Object, param1: Object | null, param2: Object | null) => Object | null;
    // private regFunc: (param0: Object, param1: SelectInstance<Object>, param2: Object | null) => void;
    createOnCancellationAction(select: SelectInstance<Object>, internalResult: Object | null): ((param0: Throwable, param1: Object | null, param2: CoroutineContext) => void) | null;
    dispose(): void;
    invokeBlock<R extends Object | number | string | boolean>(argument: Object | null): R;
    processResult(result: Object | null): Object | null;
    tryRegisterAsWaiter(select: SelectImplementation<R>): boolean;
}