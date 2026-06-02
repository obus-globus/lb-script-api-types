import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfInt extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfInt;
    withName(arg0: string): ValueLayout$OfInt;
    withOrder(arg0: ByteOrder): ValueLayout$OfInt;
    withoutName(): ValueLayout$OfInt;
}