import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ReadTimeoutHandler } from '../../../../io/netty/handler/timeout/ReadTimeoutHandler.d.ts'
export class KtorReadTimeoutHandler extends ReadTimeoutHandler {
    constructor(requestReadTimeout: number)
    // private closed: boolean;
    protected readTimedOut(ctx: ChannelHandlerContext | null): void;
}