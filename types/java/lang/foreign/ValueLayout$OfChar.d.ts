import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfChar extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfChar;
    withName(arg0: string): ValueLayout$OfChar;
    withOrder(arg0: ByteOrder): ValueLayout$OfChar;
    withoutName(): ValueLayout$OfChar;
}