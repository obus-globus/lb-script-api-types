import type { SharedFlowImpl } from '../../../../kotlinx/coroutines/flow/SharedFlowImpl.d.ts'
import type { StateFlow } from '../../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class SubscriptionCountStateFlow extends SharedFlowImpl<number> implements StateFlow<number> {
    constructor(initialValue: number)
    readonly value: number;
    increment(delta: number): boolean;
}