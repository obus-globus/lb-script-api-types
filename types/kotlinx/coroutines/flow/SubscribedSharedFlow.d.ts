import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
export class SubscribedSharedFlow<T extends Object | number | string | boolean> extends Object implements SharedFlow<T> {
    constructor(sharedFlow: SharedFlow<T>, action: Function2<Object, Object, Object>)
    // private action: (param0: FlowCollector<T>) => void;
    readonly replayCache: T[];
    // private sharedFlow: SharedFlow<T>;
    collect(collector: FlowCollector<T>): void;
}