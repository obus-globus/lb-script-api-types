import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfFloat extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfFloat;
    withName(arg0: string): ValueLayout$OfFloat;
    withOrder(arg0: ByteOrder): ValueLayout$OfFloat;
    withoutName(): ValueLayout$OfFloat;
}