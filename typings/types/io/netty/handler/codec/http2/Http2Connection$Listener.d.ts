import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2Connection$Listener extends Object{
    onGoAwayReceived(arg0: number, arg1: number, arg2: ByteBuf): void;
    onGoAwaySent(arg0: number, arg1: number, arg2: ByteBuf): void;
    onStreamActive(arg0: Http2Stream): void;
    onStreamAdded(arg0: Http2Stream): void;
    onStreamClosed(arg0: Http2Stream): void;
    onStreamHalfClosed(arg0: Http2Stream): void;
    onStreamRemoved(arg0: Http2Stream): void;
}