import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export class ChannelFlowKt extends Object {
    static asChannelFlow<T extends unknown>(self: Flow<T>): ChannelFlow<T>;
    static withContextUndispatched<T extends unknown, V extends unknown>(newContext: CoroutineContext, value: V, countOrElement: Object, block: (param0: V) => T): T;
}