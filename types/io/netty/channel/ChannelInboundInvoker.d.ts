import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ChannelInboundInvoker extends Object{
    fireChannelActive(): ChannelInboundInvoker;
    fireChannelInactive(): ChannelInboundInvoker;
    fireChannelRead(arg0: Object): ChannelInboundInvoker;
    fireChannelReadComplete(): ChannelInboundInvoker;
    fireChannelRegistered(): ChannelInboundInvoker;
    fireChannelUnregistered(): ChannelInboundInvoker;
    fireChannelWritabilityChanged(): ChannelInboundInvoker;
    fireExceptionCaught(arg0: Throwable): ChannelInboundInvoker;
    fireUserEventTriggered(arg0: Object): ChannelInboundInvoker;
}