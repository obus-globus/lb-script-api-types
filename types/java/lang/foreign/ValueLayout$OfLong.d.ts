import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfLong extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfLong;
    withName(arg0: string): ValueLayout$OfLong;
    withOrder(arg0: ByteOrder): ValueLayout$OfLong;
    withoutName(): ValueLayout$OfLong;
}