import type { Object } from '../../../java/lang/Object.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export interface Flow<T extends Object | number | string | boolean> extends Object{
    collect(collector: FlowCollector<T>): void;
}