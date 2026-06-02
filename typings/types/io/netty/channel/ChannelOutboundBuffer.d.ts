import type { AbstractChannel } from '../../../io/netty/channel/AbstractChannel.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelOutboundBuffer$Entry } from '../../../io/netty/channel/ChannelOutboundBuffer$Entry.d.ts'
import type { ChannelOutboundBuffer$MessageProcessor } from '../../../io/netty/channel/ChannelOutboundBuffer$MessageProcessor.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ClosedChannelException } from '../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ChannelOutboundBuffer extends Object {
    constructor(arg0: AbstractChannel)
    // private channel: Channel;
    // private fireChannelWritabilityChangedTask: () => void;
    // private flushed: number;
    // private flushedEntry: ChannelOutboundBuffer$Entry;
    // private inFail: boolean;
    // private nioBufferCount: number;
    // private nioBufferSize: number;
    // private tailEntry: ChannelOutboundBuffer$Entry;
    // private totalPendingSize: number;
    // private unflushedEntry: ChannelOutboundBuffer$Entry;
    // private unwritable: number;
    addFlush(): void;
    addMessage(arg0: Object, arg1: number, arg2: ChannelPromise): void;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    // private clearNioBuffers(): void;
    // private clearUserDefinedWritability(arg0: number): void;
    close(arg0: ClosedChannelException): void;
    close(arg0: Throwable, arg1: boolean): void;
    current(): Object;
    currentProgress(): number;
    decrementPendingOutboundBytes(arg0: number): void;
    // private decrementPendingOutboundBytes(arg0: number, arg1: boolean, arg2: boolean): void;
    failFlushed(arg0: Throwable, arg1: boolean): void;
    // private fireChannelWritabilityChanged(arg0: boolean): void;
    forEachFlushedMessage(arg0: ChannelOutboundBuffer$MessageProcessor): void;
    getUserDefinedWritability(arg0: number): boolean;
    incrementPendingOutboundBytes(arg0: number): void;
    // private incrementPendingOutboundBytes(arg0: number, arg1: boolean): void;
    isEmpty(): boolean;
    // private isFlushedEntry(arg0: ChannelOutboundBuffer$Entry): boolean;
    isWritable(): boolean;
    nioBufferCount(): number;
    nioBufferSize(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    progress(arg0: number): void;
    recycle(): void;
    remove(): boolean;
    remove(arg0: Throwable): boolean;
    // private remove0(arg0: Throwable, arg1: boolean): boolean;
    removeBytes(arg0: number): void;
    // private removeEntry(arg0: ChannelOutboundBuffer$Entry): void;
    // private setUnwritable(arg0: boolean): void;
    // private setUserDefinedWritability(arg0: number): void;
    setUserDefinedWritability(arg0: number, arg1: boolean): void;
    // private setWritable(arg0: boolean): void;
    size(): number;
    totalPendingWriteBytes(): number;
}