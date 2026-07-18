import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PinnedCallExecutorKt extends Object {
    static pinnedCallExecutor(context: ChannelHandlerContext, callEventGroup: (Object | null)[][]): (Object | null)[];
}