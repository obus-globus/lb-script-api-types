import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { HttpServerUpgradeHandler$UpgradeCodec } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$UpgradeCodec.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2FrameReader } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader.d.ts'
import type { Http2MultiplexCodec } from '../../../../../io/netty/handler/codec/http2/Http2MultiplexCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Http2ServerUpgradeCodec extends Object implements HttpServerUpgradeHandler$UpgradeCodec {
    constructor(arg0: Http2ConnectionHandler)
    constructor(arg0: Http2FrameCodec, ...arg1: ChannelHandler[])
    constructor(arg0: Http2MultiplexCodec)
    constructor(arg0: string, arg1: Http2ConnectionHandler)
    constructor(arg0: string, arg1: Http2ConnectionHandler, ...arg2: ChannelHandler[])
    constructor(arg0: string, arg1: Http2MultiplexCodec)
    // private connectionHandler: Http2ConnectionHandler;
    // private frameReader: Http2FrameReader;
    // private handlerName: string;
    // private handlers: ChannelHandler[];
    // private settings: JavaMap<any, any>;
    // private decodeSettings(arg0: ChannelHandlerContext, arg1: ByteBuf): JavaMap<any, any>;
    // private decodeSettingsHeader(arg0: ChannelHandlerContext, arg1: CharSequence): JavaMap<any, any>;
    prepareUpgradeResponse(arg0: ChannelHandlerContext, arg1: FullHttpRequest, arg2: Map$Entry<string, string>[]): boolean;
    requiredUpgradeHeaders(): CharSequence[];
    upgradeTo(arg0: ChannelHandlerContext, arg1: FullHttpRequest): void;
}