import type { AbstractChannel } from '../../../io/netty/channel/AbstractChannel.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultChannelPromise } from '../../../io/netty/channel/DefaultChannelPromise.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class AbstractChannel$CloseFuture extends DefaultChannelPromise {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: AbstractChannel)
    setClosed(): boolean;
    setFailure(arg0: Throwable): ChannelPromise;
    setSuccess(): ChannelPromise;
    setSuccess(arg0: void): ChannelPromise;
    tryFailure(arg0: Throwable): boolean;
    trySuccess(): boolean;
    trySuccess(arg0: void): boolean;
}