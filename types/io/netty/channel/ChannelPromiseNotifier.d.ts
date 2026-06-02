import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { PromiseNotifier } from '../../../io/netty/util/concurrent/PromiseNotifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelPromiseNotifier extends PromiseNotifier<void, ChannelFuture> implements ChannelFutureListener {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    static cascade(paramarg0: Object | null, paramarg1: Promise<Object>): Object | null;
    static cascade(paramarg0: boolean, paramarg1: Object | null, paramarg2: Promise<Object>): Object | null;
    constructor(arg0: ChannelPromise[])
    constructor(arg0: boolean, arg1: ChannelPromise[])
}