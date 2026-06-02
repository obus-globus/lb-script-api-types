import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FlowControlHandler } from '../../../../../io/netty/handler/flow/FlowControlHandler.d.ts'
export class NoReadFlowControlHandler extends FlowControlHandler {
    constructor()
    read(arg0: ChannelHandlerContext): void;
}