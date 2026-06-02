import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class DistinctFlowImpl<T extends Object | number | string | boolean> extends Object implements Flow<T> {
    constructor(upstream: Flow<T>, keySelector: Function1<T, Object>, areEquivalent: Function2<Object, Object, boolean>)
    areEquivalent: (param0: Object | null, param1: Object | null) => boolean;
    keySelector: (param0: T) => Object | null;
    // private upstream: Flow<T>;
    collect(collector: FlowCollector<T>): void;
}