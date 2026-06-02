import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfBoolean extends ValueLayout, Object{
    withByteAlignment(arg0: number): ValueLayout$OfBoolean;
    withName(arg0: string): ValueLayout$OfBoolean;
    withOrder(arg0: ByteOrder): ValueLayout$OfBoolean;
    withoutName(): ValueLayout$OfBoolean;
}