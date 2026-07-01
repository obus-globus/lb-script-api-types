import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AbstractChannelHandlerContext$WriteTask extends Object implements Runnable {
    constructor(arg0: ObjectPool$Handle<Object>, arg1: any)
    // private ctx: AbstractChannelHandlerContext;
    // private handle: ObjectPool$Handle<AbstractChannelHandlerContext$WriteTask>;
    // private msg: Object;
    // private promise: ChannelPromise;
    // private size: number;
    cancel(): void;
    // private decrementPendingOutboundBytes(): void;
    // private recycle(): void;
    run(): void;
}