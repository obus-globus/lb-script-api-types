import type { Class } from '../../../java/lang/Class.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ValueLayout extends MemoryLayout, Object{
    carrier(): Class<Object>;
    order(): ByteOrder;
    varHandle(): VarHandle;
    withByteAlignment(arg0: number): ValueLayout;
    withName(arg0: string): ValueLayout;
    withOrder(arg0: ByteOrder): ValueLayout;
    withoutName(): ValueLayout;
}