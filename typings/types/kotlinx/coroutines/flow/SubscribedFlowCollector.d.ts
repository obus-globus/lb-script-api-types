import type { Object } from '../../../java/lang/Object.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class SubscribedFlowCollector<T extends Object | number | string | boolean> extends Object implements FlowCollector<T> {
    constructor(collector: FlowCollector<T>, action: (param0: FlowCollector<T>) => void)
    // private action: (param0: FlowCollector<T>) => void;
    // private collector: FlowCollector<T>;
    emit(value: T): void;
    onSubscription(): void;
}