import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { CancellableFlow } from '../../../kotlinx/coroutines/flow/CancellableFlow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { MutableStateFlow } from '../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { StateFlowSlot } from '../../../kotlinx/coroutines/flow/StateFlowSlot.d.ts'
import type { AbstractSharedFlow } from '../../../kotlinx/coroutines/flow/internal/AbstractSharedFlow.d.ts'
import type { FusibleFlow } from '../../../kotlinx/coroutines/flow/internal/FusibleFlow.d.ts'
export class StateFlowImpl<T extends Object | number | string | boolean> extends AbstractSharedFlow<StateFlowSlot> implements CancellableFlow<T>, MutableStateFlow<T>, FusibleFlow<T> {
    constructor(initialState: Object)
    collect(collector: FlowCollector<T>): void;
    compareAndSet(expect: T, update: T): boolean;
    protected createSlot(): StateFlowSlot;
    protected createSlotArray(size: number): (StateFlowSlot | null)[];
    emit(value: T): void;
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
    resetReplayCache(): void;
    tryEmit(value: T): boolean;
    // private updateState(expectedState: Object | null, newState: Object): boolean;
}