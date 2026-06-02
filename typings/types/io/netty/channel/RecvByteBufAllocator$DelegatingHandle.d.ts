import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecvByteBufAllocator$DelegatingHandle extends Object implements RecvByteBufAllocator$Handle {
    constructor(arg0: RecvByteBufAllocator$Handle)
    // private delegate: RecvByteBufAllocator$Handle;
    allocate(arg0: ByteBufAllocator): ByteBuf;
    attemptedBytesRead(): number;
    attemptedBytesRead(arg0: number): void;
    continueReading(): boolean;
    delegate(): RecvByteBufAllocator$Handle;
    guess(): number;
    incMessagesRead(arg0: number): void;
    lastBytesRead(): number;
    lastBytesRead(arg0: number): void;
    readComplete(): void;
    reset(arg0: ChannelConfig): void;
}