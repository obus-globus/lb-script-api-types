import type { Object } from '../../../java/lang/Object.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class SubscribedStateFlow<T extends unknown> extends Object implements StateFlow<T> {
    constructor(stateFlow: StateFlow<T>, action: (param0: FlowCollector<T>) => void)
    // private action: (param0: FlowCollector<T>) => void;
    readonly replayCache: T[];
    // private stateFlow: StateFlow<T>;
    readonly value: T;
    collect(collector: FlowCollector<T>): void;
}