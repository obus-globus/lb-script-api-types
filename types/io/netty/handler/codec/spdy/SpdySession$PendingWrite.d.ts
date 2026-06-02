import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SpdyDataFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyDataFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SpdySession$PendingWrite extends Object {
    constructor(arg0: SpdyDataFrame, arg1: ChannelPromise)
    // private promise: ChannelPromise;
    // private spdyDataFrame: SpdyDataFrame;
    fail(arg0: Throwable): void;
}