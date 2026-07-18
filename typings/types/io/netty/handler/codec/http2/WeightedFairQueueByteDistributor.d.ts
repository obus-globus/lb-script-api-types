import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor.d.ts'
import type { StreamByteDistributor$StreamState } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$StreamState.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { WeightedFairQueueByteDistributor$ParentChangedEvent } from '../../../../../io/netty/handler/codec/http2/WeightedFairQueueByteDistributor$ParentChangedEvent.d.ts'
import type { WeightedFairQueueByteDistributor$State } from '../../../../../io/netty/handler/codec/http2/WeightedFairQueueByteDistributor$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeightedFairQueueByteDistributor extends Object implements StreamByteDistributor {
    constructor(arg0: Http2Connection)
    constructor(arg0: Http2Connection, arg1: number)
    // private allocationQuantum: number;
    // private connection: Http2Connection;
    // private connectionState: WeightedFairQueueByteDistributor$State;
    // private maxStateOnlySize: number;
    // private stateKey: Http2Connection$PropertyKey;
    // private stateOnlyMap: JavaMap<any, any>;
    // private stateOnlyRemovalQueue: WeightedFairQueueByteDistributor$State[];
    allocationQuantum(arg0: number): void;
    distribute(arg0: number, arg1: StreamByteDistributor$Writer): boolean;
    // private distribute(arg0: number, arg1: StreamByteDistributor$Writer, arg2: WeightedFairQueueByteDistributor$State): number;
    // private distributeToChildren(arg0: number, arg1: StreamByteDistributor$Writer, arg2: WeightedFairQueueByteDistributor$State): number;
    isChild(arg0: number, arg1: number, arg2: number): boolean;
    notifyParentChanged(arg0: WeightedFairQueueByteDistributor$ParentChangedEvent[]): void;
    numChildren(arg0: number): number;
    // private state(arg0: Http2Stream): WeightedFairQueueByteDistributor$State;
    // private state(arg0: number): WeightedFairQueueByteDistributor$State;
    updateDependencyTree(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    updateStreamableBytes(arg0: StreamByteDistributor$StreamState): void;
}