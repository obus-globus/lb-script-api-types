import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class SubscribedFlowCollector<T extends Object | number | string | boolean> extends Object implements FlowCollector<T> {
    constructor(collector: FlowCollector<T>, action: Function2<Object, Object, Object>)
    // private action: (param0: FlowCollector<T>) => void;
    // private collector: FlowCollector<T>;
    emit(value: T): void;
    onSubscription(): void;
}