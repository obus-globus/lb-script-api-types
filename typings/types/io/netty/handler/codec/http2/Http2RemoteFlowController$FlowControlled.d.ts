import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface Http2RemoteFlowController$FlowControlled extends Object{
    error(arg0: ChannelHandlerContext, arg1: Throwable): void;
    merge(arg0: ChannelHandlerContext, arg1: Http2RemoteFlowController$FlowControlled): boolean;
    size(): number;
    write(arg0: ChannelHandlerContext, arg1: number): void;
    writeComplete(): void;
}