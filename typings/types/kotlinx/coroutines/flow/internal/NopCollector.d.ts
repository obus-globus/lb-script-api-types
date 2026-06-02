import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class NopCollector extends Object implements FlowCollector<Object> {
    static INSTANCE: NopCollector;
    emit(value: Object | null): void;
}