import type { ByteOrder } from '../../../../../io/ktor/utils/io/core/ByteOrder.d.ts'
import type { ByteOrder as ByteOrder_2 } from '../../../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteOrder$Companion extends Object {
    // private native: ByteOrder;
    nativeOrder(): ByteOrder;
    of(nioOrder: ByteOrder_2): ByteOrder;
}