import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StreamByteDistributor$StreamState extends Object{
    hasFrame(): boolean;
    pendingBytes(): number;
    stream(): Http2Stream;
    windowSize(): number;
}