import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { UniformStreamByteDistributor } from '../../../../../io/netty/handler/codec/http2/UniformStreamByteDistributor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UniformStreamByteDistributor$State extends Object {
    constructor(null_: UniformStreamByteDistributor, arg1: Http2Stream)
    // private enqueued: boolean;
    // private stream: Http2Stream;
    // private streamableBytes: number;
    // private windowNegative: boolean;
    // private writing: boolean;
    addToQueue(): void;
    close(): void;
    removeFromQueue(): void;
    updateStreamableBytes(arg0: number, arg1: boolean, arg2: number): void;
    write(arg0: number, arg1: StreamByteDistributor$Writer): void;
}