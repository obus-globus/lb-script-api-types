import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfByte extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfByte;
    withName(arg0: string): ValueLayout$OfByte;
    withOrder(arg0: ByteOrder): ValueLayout$OfByte;
    withoutName(): ValueLayout$OfByte;
}