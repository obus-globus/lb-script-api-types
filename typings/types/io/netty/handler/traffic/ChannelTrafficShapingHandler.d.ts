import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractTrafficShapingHandler } from '../../../../io/netty/handler/traffic/AbstractTrafficShapingHandler.d.ts'
import type { ChannelTrafficShapingHandler$ToSend } from '../../../../io/netty/handler/traffic/ChannelTrafficShapingHandler$ToSend.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChannelTrafficShapingHandler extends AbstractTrafficShapingHandler {
    static DEFAULT_CHECK_INTERVAL: number;
    static DEFAULT_MAX_TIME: number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private messagesQueue: ChannelTrafficShapingHandler$ToSend[];
    // private queueSize: number;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    queueSize(): number;
    // private sendAllValid(arg0: ChannelHandlerContext, arg1: number): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: ChannelPromise): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: number, arg4: number, arg5: ChannelPromise): void;
}