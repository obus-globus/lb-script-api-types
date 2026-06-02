import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpResponseStatus } from '../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpProxyHandler$HttpClientCodecWrapper } from '../../../../io/netty/handler/proxy/HttpProxyHandler$HttpClientCodecWrapper.d.ts'
import type { ProxyHandler } from '../../../../io/netty/handler/proxy/ProxyHandler.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HttpProxyHandler extends ProxyHandler {
    constructor(arg0: SocketAddress)
    constructor(arg0: SocketAddress, arg1: Map$Entry<string, string>[])
    constructor(arg0: SocketAddress, arg1: Map$Entry<string, string>[], arg2: boolean)
    constructor(arg0: SocketAddress, arg1: string, arg2: string)
    constructor(arg0: SocketAddress, arg1: string, arg2: string, arg3: Map$Entry<string, string>[])
    constructor(arg0: SocketAddress, arg1: string, arg2: string, arg3: Map$Entry<string, string>[], arg4: boolean)
    // private authorization: CharSequence;
    // private codecWrapper: HttpProxyHandler$HttpClientCodecWrapper;
    // private ignoreDefaultPortsInConnectHostHeader: boolean;
    // private inboundHeaders: Map$Entry<string, string>[];
    // private outboundHeaders: Map$Entry<string, string>[];
    // private password: string;
    // private status: HttpResponseStatus;
    // private username: string;
    addCodec(arg0: ChannelHandlerContext): void;
    authScheme(): string;
    handleResponse(arg0: ChannelHandlerContext, arg1: Object): boolean;
    newInitialMessage(arg0: ChannelHandlerContext): Object;
    password(): string;
    protocol(): string;
    removeDecoder(arg0: ChannelHandlerContext): void;
    removeEncoder(arg0: ChannelHandlerContext): void;
    username(): string;
}