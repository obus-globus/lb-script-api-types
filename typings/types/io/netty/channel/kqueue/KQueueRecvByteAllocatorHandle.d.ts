import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$DelegatingHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$DelegatingHandle.d.ts'
import type { RecvByteBufAllocator$ExtendedHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { PreferredDirectByteBufAllocator } from '../../../../io/netty/channel/unix/PreferredDirectByteBufAllocator.d.ts'
import type { UncheckedBooleanSupplier } from '../../../../io/netty/util/UncheckedBooleanSupplier.d.ts'
export class KQueueRecvByteAllocatorHandle extends RecvByteBufAllocator$DelegatingHandle implements RecvByteBufAllocator$ExtendedHandle {
    constructor(arg0: RecvByteBufAllocator$ExtendedHandle)
    // private defaultMaybeMoreDataSupplier: UncheckedBooleanSupplier;
    // private numberBytesPending: number;
    // private preferredDirectByteBufAllocator: PreferredDirectByteBufAllocator;
    // private readEOF: boolean;
    allocate(arg0: ByteBufAllocator): ByteBuf;
    continueReading(): boolean;
    continueReading(arg0: UncheckedBooleanSupplier): boolean;
    isReadEOF(): boolean;
    // private maybeMoreDataToRead(): boolean;
    numberBytesPending(arg0: number): void;
    readEOF(): void;
}