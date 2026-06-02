import type { Object } from '../../../java/lang/Object.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export interface MutableSharedFlow<T extends Object | number | string | boolean> extends Object, FlowCollector<T>, SharedFlow<T>{
    readonly subscriptionCount: StateFlow<number>;
    emit(value: T): void;
    resetReplayCache(): void;
    tryEmit(value: T): boolean;
}