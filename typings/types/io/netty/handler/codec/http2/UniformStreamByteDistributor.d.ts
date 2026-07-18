import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor.d.ts'
import type { StreamByteDistributor$StreamState } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$StreamState.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { UniformStreamByteDistributor$State } from '../../../../../io/netty/handler/codec/http2/UniformStreamByteDistributor$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UniformStreamByteDistributor extends Object implements StreamByteDistributor {
    constructor(arg0: Http2Connection)
    // private minAllocationChunk: number;
    // private queue: UniformStreamByteDistributor$State[];
    // private stateKey: Http2Connection$PropertyKey;
    // private totalStreamableBytes: number;
    distribute(arg0: number, arg1: StreamByteDistributor$Writer): boolean;
    minAllocationChunk(arg0: number): void;
    // private state(arg0: Http2Stream): UniformStreamByteDistributor$State;
    updateDependencyTree(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    updateStreamableBytes(arg0: StreamByteDistributor$StreamState): void;
}