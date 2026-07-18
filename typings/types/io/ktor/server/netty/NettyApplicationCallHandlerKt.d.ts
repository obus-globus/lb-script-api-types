import type { NettyHttp1ApplicationCall } from '../../../../io/ktor/server/netty/http1/NettyHttp1ApplicationCall.d.ts'
import type { NettyHttp1ApplicationRequest } from '../../../../io/ktor/server/netty/http1/NettyHttp1ApplicationRequest.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NettyApplicationCallHandlerKt extends Object {
    static hasValidTransferEncoding(self: string[]): boolean;
    static isValid(self: NettyHttp1ApplicationRequest): boolean;
    static respond408RequestTimeoutHttp1(self: ChannelHandlerContext): void;
    static respondError400BadRequest(self: NettyHttp1ApplicationCall): void;
}