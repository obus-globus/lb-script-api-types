import type { Class } from '../../../java/lang/Class.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout extends MemoryLayout, Object{
    byteAlignment(): number;
    byteSize(): number;
    carrier(): Class<Object>;
    order(): ByteOrder;
    scale(arg0: number, arg1: number): number;
    scaleHandle(): MethodHandle;
    varHandle(): VarHandle;
    withByteAlignment(arg0: number): ValueLayout;
    withName(arg0: string): ValueLayout;
    withOrder(arg0: ByteOrder): ValueLayout;
    withoutName(): ValueLayout;
}