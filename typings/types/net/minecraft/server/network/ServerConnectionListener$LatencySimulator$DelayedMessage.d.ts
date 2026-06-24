import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ServerConnectionListener$LatencySimulator$DelayedMessage extends Record {
    private constructor(ctx: ChannelHandlerContext, msg: Object)
    // private ctx: ChannelHandlerContext;
    // private msg: Object;
    ctx(): ChannelHandlerContext;
    equals(o: Object | null): boolean;
    hashCode(): number;
    msg(): Object;
    toString(): string;
}