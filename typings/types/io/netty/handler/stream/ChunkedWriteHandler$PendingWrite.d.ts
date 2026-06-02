import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ChunkedWriteHandler$PendingWrite extends Object {
    constructor(arg0: Object, arg1: ChannelPromise)
    // private msg: Object;
    // private promise: ChannelPromise;
    fail(arg0: Throwable): void;
    progress(arg0: number, arg1: number): void;
    success(arg0: number): void;
}