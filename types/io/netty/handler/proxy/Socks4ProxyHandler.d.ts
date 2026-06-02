import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ProxyHandler } from '../../../../io/netty/handler/proxy/ProxyHandler.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Socks4ProxyHandler extends ProxyHandler {
    constructor(arg0: SocketAddress)
    constructor(arg0: SocketAddress, arg1: string)
    // private decoderName: string;
    // private encoderName: string;
    // private username: string;
    addCodec(arg0: ChannelHandlerContext): void;
    authScheme(): string;
    handleResponse(arg0: ChannelHandlerContext, arg1: Object): boolean;
    newInitialMessage(arg0: ChannelHandlerContext): Object;
    protocol(): string;
    removeDecoder(arg0: ChannelHandlerContext): void;
    removeEncoder(arg0: ChannelHandlerContext): void;
    username(): string;
}