import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { AbstractFlow } from '../../../kotlinx/coroutines/flow/AbstractFlow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class SafeFlow<T extends Object | number | string | boolean> extends AbstractFlow<T> {
    constructor(block: Function2<Object, Object, Object>)
    // private block: (param0: FlowCollector<T>) => void;
    collectSafely(collector: FlowCollector<T>): void;
}