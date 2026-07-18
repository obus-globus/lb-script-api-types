import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpScheme } from '../../../../../io/netty/handler/codec/http/HttpScheme.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpToHttp2ConnectionHandler extends Http2ConnectionHandler {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean)
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean, arg4: boolean)
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean, arg4: boolean, arg5: HttpScheme)
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: HttpScheme)
    // private currentStreamId: number;
    // private httpScheme: HttpScheme;
    // private validateHeaders: boolean;
    // private getStreamId(arg0: Map$Entry<string, string>[]): number;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}