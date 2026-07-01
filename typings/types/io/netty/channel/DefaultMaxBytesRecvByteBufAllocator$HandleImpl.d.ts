import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { DefaultMaxBytesRecvByteBufAllocator } from '../../../io/netty/channel/DefaultMaxBytesRecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$ExtendedHandle } from '../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { UncheckedBooleanSupplier } from '../../../io/netty/util/UncheckedBooleanSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultMaxBytesRecvByteBufAllocator$HandleImpl extends Object implements RecvByteBufAllocator$ExtendedHandle {
    constructor(null_: DefaultMaxBytesRecvByteBufAllocator, arg1: any)
    // private attemptBytesRead: number;
    // private bytesToRead: number;
    // private defaultMaybeMoreSupplier: UncheckedBooleanSupplier;
    // private individualReadMax: number;
    // private lastBytesRead: number;
    allocate(arg0: ByteBufAllocator): ByteBuf;
    attemptedBytesRead(): number;
    attemptedBytesRead(arg0: number): void;
    continueReading(): boolean;
    continueReading(arg0: UncheckedBooleanSupplier): boolean;
    guess(): number;
    incMessagesRead(arg0: number): void;
    lastBytesRead(): number;
    lastBytesRead(arg0: number): void;
    readComplete(): void;
    reset(arg0: ChannelConfig): void;
}