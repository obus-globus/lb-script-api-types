import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfDouble extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfDouble;
    withName(arg0: string): ValueLayout$OfDouble;
    withOrder(arg0: ByteOrder): ValueLayout$OfDouble;
    withoutName(): ValueLayout$OfDouble;
}