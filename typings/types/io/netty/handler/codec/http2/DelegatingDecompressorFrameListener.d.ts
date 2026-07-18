import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { DelegatingDecompressorFrameListener$Http2Decompressor } from '../../../../../io/netty/handler/codec/http2/DelegatingDecompressorFrameListener$Http2Decompressor.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameListenerDecorator } from '../../../../../io/netty/handler/codec/http2/Http2FrameListenerDecorator.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class DelegatingDecompressorFrameListener extends Http2FrameListenerDecorator {
    constructor(arg0: Http2Connection, arg1: Http2FrameListener)
    constructor(arg0: Http2Connection, arg1: Http2FrameListener, arg2: boolean)
    constructor(arg0: Http2Connection, arg1: Http2FrameListener, arg2: boolean, arg3: number)
    constructor(arg0: Http2Connection, arg1: Http2FrameListener, arg2: number)
    // private connection: Http2Connection;
    // private flowControllerInitialized: boolean;
    // private maxAllocation: number;
    // private propertyKey: Http2Connection$PropertyKey;
    // private strict: boolean;
    decompressor(arg0: Http2Stream): DelegatingDecompressorFrameListener$Http2Decompressor;
    getTargetContentEncoding(arg0: CharSequence): CharSequence;
    // private initDecompressor(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: boolean): void;
    newContentDecompressor(arg0: ChannelHandlerContext, arg1: CharSequence): EmbeddedChannel;
    onDataRead(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean): number;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean): void;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean): void;
}