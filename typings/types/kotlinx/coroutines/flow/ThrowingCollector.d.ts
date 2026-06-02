import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class ThrowingCollector extends Object implements FlowCollector<Object> {
    constructor(e: Throwable)
    e: Throwable;
    emit(value: Object | null): void;
}