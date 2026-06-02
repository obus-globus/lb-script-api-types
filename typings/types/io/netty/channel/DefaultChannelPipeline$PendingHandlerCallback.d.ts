import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DefaultChannelPipeline$PendingHandlerCallback extends Object implements Runnable {
    constructor(arg0: AbstractChannelHandlerContext)
    // private ctx: AbstractChannelHandlerContext;
    // private next: DefaultChannelPipeline$PendingHandlerCallback;
    execute(): void;
}