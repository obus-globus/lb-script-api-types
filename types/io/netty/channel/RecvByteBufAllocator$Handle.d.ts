import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RecvByteBufAllocator$Handle extends Object{
    allocate(arg0: ByteBufAllocator): ByteBuf;
    attemptedBytesRead(): number;
    attemptedBytesRead(arg0: number): void;
    continueReading(): boolean;
    guess(): number;
    incMessagesRead(arg0: number): void;
    lastBytesRead(): number;
    lastBytesRead(arg0: number): void;
    readComplete(): void;
    reset(arg0: ChannelConfig): void;
}