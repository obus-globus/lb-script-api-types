import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export interface SharedFlow<T extends Object | number | string | boolean> extends Object, Flow<T>{
    readonly replayCache: T[];
    collect(collector: FlowCollector<T>): void;
}