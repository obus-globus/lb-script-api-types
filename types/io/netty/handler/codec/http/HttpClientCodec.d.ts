import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { CombinedChannelDuplexHandler } from '../../../../../io/netty/channel/CombinedChannelDuplexHandler.d.ts'
import type { HttpClientUpgradeHandler$SourceCodec } from '../../../../../io/netty/handler/codec/http/HttpClientUpgradeHandler$SourceCodec.d.ts'
import type { HttpDecoderConfig } from '../../../../../io/netty/handler/codec/http/HttpDecoderConfig.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequestEncoder } from '../../../../../io/netty/handler/codec/http/HttpRequestEncoder.d.ts'
import type { HttpResponseDecoder } from '../../../../../io/netty/handler/codec/http/HttpResponseDecoder.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class HttpClientCodec extends CombinedChannelDuplexHandler<HttpResponseDecoder, HttpRequestEncoder> implements HttpClientUpgradeHandler$SourceCodec {
    static DEFAULT_FAIL_ON_MISSING_RESPONSE: boolean;
    static DEFAULT_PARSE_HTTP_AFTER_CONNECT_REQUEST: boolean;
    constructor()
    constructor(arg0: HttpDecoderConfig, arg1: boolean, arg2: boolean)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean)
    // private done: boolean;
    // private failOnMissingResponse: boolean;
    // private parseHttpAfterConnectRequest: boolean;
    // private queue: HttpMethod[];
    // private requestResponseCounter: AtomicLong;
    isSingleDecode(): boolean;
    prepareUpgradeFrom(arg0: ChannelHandlerContext): void;
    setSingleDecode(arg0: boolean): void;
    upgradeFrom(arg0: ChannelHandlerContext): void;
}