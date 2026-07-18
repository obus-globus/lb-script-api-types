import type { StreamByteDistributor$StreamState } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$StreamState.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StreamByteDistributor extends Object{
    distribute(arg0: number, arg1: StreamByteDistributor$Writer): boolean;
    updateDependencyTree(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    updateStreamableBytes(arg0: StreamByteDistributor$StreamState): void;
}