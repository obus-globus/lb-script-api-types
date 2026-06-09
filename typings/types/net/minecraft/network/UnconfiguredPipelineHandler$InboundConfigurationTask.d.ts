import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface UnconfiguredPipelineHandler$InboundConfigurationTask extends Object {
    andThen(otherTask: (param0: ChannelHandlerContext) => void): (param0: ChannelHandlerContext) => void;
    run(ctx: ChannelHandlerContext): void;
}