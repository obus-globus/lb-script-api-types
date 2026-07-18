import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { WeightedFairQueueByteDistributor } from '../../../../../io/netty/handler/codec/http2/WeightedFairQueueByteDistributor.d.ts'
import type { WeightedFairQueueByteDistributor$ParentChangedEvent } from '../../../../../io/netty/handler/codec/http2/WeightedFairQueueByteDistributor$ParentChangedEvent.d.ts'
import type { IntObjectMap$PrimitiveEntry } from '../../../../../io/netty/util/collection/IntObjectMap$PrimitiveEntry.d.ts'
import type { PriorityQueueNode } from '../../../../../io/netty/util/internal/PriorityQueueNode.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class WeightedFairQueueByteDistributor$State extends Object implements PriorityQueueNode {
    static INDEX_NOT_IN_QUEUE: number;
    constructor(null_: WeightedFairQueueByteDistributor, arg1: Http2Stream)
    constructor(null_: WeightedFairQueueByteDistributor, arg1: Http2Stream, arg2: number)
    constructor(null_: WeightedFairQueueByteDistributor, arg1: number)
    constructor(null_: WeightedFairQueueByteDistributor, arg1: number, arg2: Http2Stream, arg3: number)
    // private activeCountForTree: number;
    // private children: JavaMap<any, any>;
    // private dependencyTreeDepth: number;
    // private flags: number;
    // private parent: WeightedFairQueueByteDistributor$State;
    // private pseudoTime: number;
    // private pseudoTimeQueue: WeightedFairQueueByteDistributor$State[];
    // private pseudoTimeQueueIndex: number;
    // private pseudoTimeToWrite: number;
    // private stateOnlyQueueIndex: number;
    // private stream: Http2Stream;
    // private streamId: number;
    // private streamableBytes: number;
    // private totalQueuedWeights: number;
    // private weight: number;
    activeCountChangeForTree(arg0: number): void;
    close(): void;
    // private getTotalWeight(): number;
    // private initChildren(): void;
    // private initChildrenIfEmpty(): void;
    isActive(): boolean;
    isDescendantOf(arg0: WeightedFairQueueByteDistributor$State): boolean;
    isDistributing(): boolean;
    offerAndInitializePseudoTime(arg0: WeightedFairQueueByteDistributor$State): void;
    offerPseudoTimeQueue(arg0: WeightedFairQueueByteDistributor$State): void;
    peekPseudoTimeQueue(): WeightedFairQueueByteDistributor$State;
    pollPseudoTimeQueue(): WeightedFairQueueByteDistributor$State;
    priorityQueueIndex(arg0: (Object | null)[]): number;
    priorityQueueIndex(arg0: (Object | null)[], arg1: number): void;
    // private removeAllChildrenExcept(arg0: WeightedFairQueueByteDistributor$State): JavaMap<any, any>;
    removeChild(arg0: WeightedFairQueueByteDistributor$State): void;
    removePseudoTimeQueue(arg0: WeightedFairQueueByteDistributor$State): void;
    // private setActive(): void;
    setDistributing(): void;
    // private setParent(arg0: WeightedFairQueueByteDistributor$State): void;
    setStreamReservedOrActivated(): void;
    takeChild(arg0: WeightedFairQueueByteDistributor$State, arg1: boolean, arg2: WeightedFairQueueByteDistributor$ParentChangedEvent[]): void;
    takeChild(arg0: Iterator<IntObjectMap$PrimitiveEntry<WeightedFairQueueByteDistributor$State>>, arg1: WeightedFairQueueByteDistributor$State, arg2: boolean, arg3: WeightedFairQueueByteDistributor$ParentChangedEvent[]): void;
    toString(): string;
    // private toString(arg0: StringBuilder): void;
    // private unsetActive(): void;
    unsetDistributing(): void;
    updatePseudoTime(arg0: WeightedFairQueueByteDistributor$State, arg1: number, arg2: number): void;
    updateStreamableBytes(arg0: number, arg1: boolean): void;
    wasStreamReservedOrActivated(): boolean;
    write(arg0: number, arg1: StreamByteDistributor$Writer): void;
}