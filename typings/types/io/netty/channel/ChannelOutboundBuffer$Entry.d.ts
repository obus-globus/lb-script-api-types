import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelOutboundBuffer$Entry extends Object {
    constructor(arg0: ObjectPool$Handle<Object>, arg1: FastThreadLocal<ByteBuffer[]>)
    // private buf: ByteBuffer;
    // private bufs: ByteBuffer[];
    // private cancelled: boolean;
    // private count: number;
    // private handle: Recycler$EnhancedHandle<ChannelOutboundBuffer$Entry>;
    // private msg: Object;
    // private next: ChannelOutboundBuffer$Entry;
    // private pendingSize: number;
    // private progress: number;
    // private promise: ChannelPromise;
    // private total: number;
    cancel(): number;
    unguardedRecycle(): void;
    unguardedRecycleAndGetNext(): ChannelOutboundBuffer$Entry;
}