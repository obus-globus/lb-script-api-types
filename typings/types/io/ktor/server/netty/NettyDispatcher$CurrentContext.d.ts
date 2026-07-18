import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
export class NettyDispatcher$CurrentContext extends AbstractCoroutineContextElement {
    constructor(context: ChannelHandlerContext, executor: (Object | null)[])
    readonly context: ChannelHandlerContext;
    readonly executor: (Object | null)[];
}