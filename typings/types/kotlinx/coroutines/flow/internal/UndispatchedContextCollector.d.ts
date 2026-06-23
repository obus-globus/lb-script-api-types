import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class UndispatchedContextCollector<T extends unknown> extends Object implements FlowCollector<T> {
    constructor(downstream: FlowCollector<T>, emitContext: CoroutineContext)
    // private countOrElement: Object;
    // private emitContext: CoroutineContext;
    // private emitRef: (param0: T) => void;
    emit(value: T): void;
}