import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { CancellableFlow } from '../../../kotlinx/coroutines/flow/CancellableFlow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { SharedFlowImpl$Emitter } from '../../../kotlinx/coroutines/flow/SharedFlowImpl$Emitter.d.ts'
import type { SharedFlowSlot } from '../../../kotlinx/coroutines/flow/SharedFlowSlot.d.ts'
import type { AbstractSharedFlow } from '../../../kotlinx/coroutines/flow/internal/AbstractSharedFlow.d.ts'
import type { FusibleFlow } from '../../../kotlinx/coroutines/flow/internal/FusibleFlow.d.ts'
export class SharedFlowImpl<T extends Object | number | string | boolean> extends AbstractSharedFlow<SharedFlowSlot> implements CancellableFlow<T>, MutableSharedFlow<T>, FusibleFlow<T> {
    constructor(replay: number, bufferCapacity: number, onBufferOverflow: BufferOverflow)
    // private buffer: (Object | null)[] | null;
    // private bufferCapacity: number;
    // private /*not mapped: */ getBufferEndIndex(): number;
    // private bufferSize: number;
    // private /*not mapped: */ getHead(): number;
    // private /*not mapped: */ getLastReplayedLocked(): T;
    // private minCollectorIndex: number;
    // private onBufferOverflow: BufferOverflow;
    // private /*not mapped: */ getQueueEndIndex(): number;
    // private queueSize: number;
    // private replay: number;
    readonly replayCache: T[];
    // private replayIndex: number;
    // private /*not mapped: */ getReplaySize(): number;
    // private /*not mapped: */ getTotalSize(): number;
    // private awaitValue(slot: SharedFlowSlot): void;
    // private cancelEmitter(emitter: SharedFlowImpl$Emitter): void;
    // private cleanupTailLocked(): void;
    collect(collector: FlowCollector<T>): void;
    // private correctCollectorIndexesOnDropOldest(newHead: number): void;
    protected createSlot(): SharedFlowSlot;
    protected createSlotArray(size: number): (SharedFlowSlot | null)[];
    // private dropOldestLocked(): void;
    emit(value: T): void;
    // private emitSuspend(value: T): void;
    // private enqueueLocked(item: Object | null): void;
    // private findSlotsToResumeLocked(resumesIn: (Continuation<void> | null)[]): (Continuation<void> | null)[];
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
    // private getPeekedValueLockedAt(index: number): Object | null;
    // private growBuffer(curBuffer: (Object | null)[] | null, curSize: number, newSize: number): (Object | null)[];
    resetReplayCache(): void;
    tryEmit(value: T): boolean;
    // private tryEmitLocked(value: T): boolean;
    // private tryEmitNoCollectorsLocked(value: T): boolean;
    // private tryPeekLocked(slot: SharedFlowSlot): number;
    // private tryTakeValue(slot: SharedFlowSlot): Object | null;
    // private updateBufferLocked(newReplayIndex: number, newMinCollectorIndex: number, newBufferEndIndex: number, newQueueEndIndex: number): void;
    updateCollectorIndexLocked(oldIndex: number): (Continuation<void> | null)[];
    updateNewCollectorIndexLocked(): number;
}