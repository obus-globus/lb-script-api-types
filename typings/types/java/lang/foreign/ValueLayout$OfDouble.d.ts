import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout$OfDouble extends ValueLayout, Object{
    byteAlignment(): number;
    byteSize(): number;
    order(): ByteOrder;
    scale(arg0: number, arg1: number): number;
    scaleHandle(): MethodHandle;
    varHandle(): VarHandle;
    withByteAlignment(arg0: number): ValueLayout$OfDouble;
    withName(arg0: string): ValueLayout$OfDouble;
    withOrder(arg0: ByteOrder): ValueLayout$OfDouble;
    withoutName(): ValueLayout$OfDouble;
}