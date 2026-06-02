import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class EmptyFlow extends Object implements Flow<void> {
    static INSTANCE: EmptyFlow;
    collect(collector: FlowCollector<void>): void;
}