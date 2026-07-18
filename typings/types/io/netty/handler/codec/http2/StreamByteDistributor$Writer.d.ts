import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StreamByteDistributor$Writer extends Object{
    write(arg0: Http2Stream, arg1: number): void;
}