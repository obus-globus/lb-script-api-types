import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class IdleStateHandler$AbstractIdleTask extends Object implements Runnable {
    constructor(arg0: ChannelHandlerContext)
    // private ctx: ChannelHandlerContext;
    run(): void;
    run(arg0: ChannelHandlerContext): void;
}