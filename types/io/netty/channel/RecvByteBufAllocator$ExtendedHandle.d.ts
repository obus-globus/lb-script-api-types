import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { UncheckedBooleanSupplier } from '../../../io/netty/util/UncheckedBooleanSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RecvByteBufAllocator$ExtendedHandle extends RecvByteBufAllocator$Handle, Object{
    continueReading(arg0: UncheckedBooleanSupplier): boolean;
}