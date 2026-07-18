import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { RequestConnectionPoint } from '../../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyConnectionPoint extends Object implements RequestConnectionPoint {
    constructor(request: HttpRequest, context: ChannelHandlerContext)
    // private context: ChannelHandlerContext;
    // private /*not mapped: */ getDefaultPort(): number;
    readonly host: string;
    readonly localAddress: string;
    readonly localHost: string;
    readonly localPort: number;
    readonly method: HttpMethod;
    readonly port: number;
    readonly remoteAddress: string;
    readonly remoteHost: string;
    readonly remotePort: number;
    // private request: HttpRequest;
    readonly scheme: string;
    readonly serverHost: string;
    readonly serverPort: number;
    readonly uri: string;
    readonly version: string;
    toString(): string;
}