import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$DelegatingHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$DelegatingHandle.d.ts'
import type { RecvByteBufAllocator$ExtendedHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { PreferredDirectByteBufAllocator } from '../../../../io/netty/channel/unix/PreferredDirectByteBufAllocator.d.ts'
import type { UncheckedBooleanSupplier } from '../../../../io/netty/util/UncheckedBooleanSupplier.d.ts'
export class EpollRecvByteAllocatorHandle extends RecvByteBufAllocator$DelegatingHandle implements RecvByteBufAllocator$ExtendedHandle {
    constructor(arg0: RecvByteBufAllocator$ExtendedHandle)
    // private defaultMaybeMoreDataSupplier: UncheckedBooleanSupplier;
    // private preferredDirectByteBufAllocator: PreferredDirectByteBufAllocator;
    // private receivedRdHup: boolean;
    allocate(arg0: ByteBufAllocator): ByteBuf;
    continueReading(): boolean;
    continueReading(arg0: UncheckedBooleanSupplier): boolean;
    isReceivedRdHup(): boolean;
    maybeMoreDataToRead(): boolean;
    receivedRdHup(): void;
}