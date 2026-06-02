import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfShort extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfShort;
    withName(arg0: string): ValueLayout$OfShort;
    withOrder(arg0: ByteOrder): ValueLayout$OfShort;
    withoutName(): ValueLayout$OfShort;
}