import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultChannelPromise } from '../../../../../io/netty/channel/DefaultChannelPromise.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2CodecUtil$SimpleChannelPromiseAggregator extends DefaultChannelPromise {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: ChannelPromise, arg1: Channel, arg2: (Object | null)[])
    // private aggregateFailure: Throwable;
    // private doneAllocating: boolean;
    // private doneCount: number;
    // private expectedCount: number;
    // private promise: ChannelPromise;
    // private allPromisesDone(): boolean;
    // private allowFailure(): boolean;
    // private awaitingPromises(): boolean;
    doneAllocatingPromises(): ChannelPromise;
    newPromise(): ChannelPromise;
    // private setAggregateFailure(arg0: Throwable): void;
    setFailure(arg0: Throwable): ChannelPromise;
    // private setPromise(): ChannelPromise;
    setSuccess(): ChannelPromise;
    setSuccess(arg0: void): ChannelPromise;
    tryFailure(arg0: Throwable): boolean;
    // private tryPromise(): boolean;
    trySuccess(): boolean;
    trySuccess(arg0: void): boolean;
}