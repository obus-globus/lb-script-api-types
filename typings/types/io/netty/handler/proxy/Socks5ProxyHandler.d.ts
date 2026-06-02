import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Socks5AuthMethod } from '../../../../io/netty/handler/codec/socksx/v5/Socks5AuthMethod.d.ts'
import type { Socks5ClientEncoder } from '../../../../io/netty/handler/codec/socksx/v5/Socks5ClientEncoder.d.ts'
import type { ProxyHandler } from '../../../../io/netty/handler/proxy/ProxyHandler.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Socks5ProxyHandler extends ProxyHandler {
    constructor(arg0: SocketAddress)
    constructor(arg0: SocketAddress, arg1: number, arg2: number[], arg3: Socks5ClientEncoder)
    constructor(arg0: SocketAddress, arg1: string, arg2: string)
    // private clientEncoder: Socks5ClientEncoder;
    // private decoderName: string;
    // private encoderName: string;
    // private password: string;
    // private privateAuthMethod: number;
    // private privateToken: number[];
    // private username: string;
    addCodec(arg0: ChannelHandlerContext): void;
    authScheme(): string;
    handleResponse(arg0: ChannelHandlerContext, arg1: Object): boolean;
    newInitialMessage(arg0: ChannelHandlerContext): Object;
    password(): string;
    protocol(): string;
    removeDecoder(arg0: ChannelHandlerContext): void;
    removeEncoder(arg0: ChannelHandlerContext): void;
    // private sendConnectCommand(arg0: ChannelHandlerContext): void;
    // private socksAuthMethod(): Socks5AuthMethod;
    username(): string;
}