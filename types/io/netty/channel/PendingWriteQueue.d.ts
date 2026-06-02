import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundInvoker } from '../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { PendingBytesTracker } from '../../../io/netty/channel/PendingBytesTracker.d.ts'
import type { PendingWriteQueue$PendingWrite } from '../../../io/netty/channel/PendingWriteQueue$PendingWrite.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class PendingWriteQueue extends Object {
    constructor(arg0: Channel)
    constructor(arg0: ChannelHandlerContext)
    // private bytes: number;
    // private executor: (Object | null)[];
    // private head: PendingWriteQueue$PendingWrite;
    // private invoker: ChannelOutboundInvoker;
    // private size: number;
    // private tail: PendingWriteQueue$PendingWrite;
    // private tracker: PendingBytesTracker;
    add(arg0: Object, arg1: ChannelPromise): void;
    // private assertEmpty(): void;
    bytes(): number;
    current(): Object;
    isEmpty(): boolean;
    // private recycle(arg0: PendingWriteQueue$PendingWrite, arg1: boolean): void;
    remove(): ChannelPromise;
    removeAndFail(arg0: Throwable): void;
    removeAndFailAll(arg0: Throwable): void;
    removeAndWrite(): ChannelFuture;
    removeAndWriteAll(): ChannelFuture;
    size(): number;
    // private size(arg0: Object): number;
}