import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractTrafficShapingHandler$ReopenReadTimerTask extends Object implements Runnable {
    constructor(arg0: ChannelHandlerContext)
    // private ctx: ChannelHandlerContext;
    run(): void;
}