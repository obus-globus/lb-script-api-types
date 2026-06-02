import type { AbstractNetherNetXboxSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/AbstractNetherNetXboxSignaling.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { TextWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/TextWebSocketFrame.d.ts'
export class NetherNetXboxSignaling extends AbstractNetherNetXboxSignaling {
    constructor(arg0: number, arg1: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    channelRead0(arg0: ChannelHandlerContext, arg1: TextWebSocketFrame): void;
    onConnected(arg0: ChannelHandlerContext): void;
    sendSignal(arg0: string, arg1: string): void;
}