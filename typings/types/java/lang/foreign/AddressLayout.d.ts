import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AddressLayout extends ValueLayout, Object{
    byteAlignment(): number;
    byteSize(): number;
    order(): ByteOrder;
    scale(arg0: number, arg1: number): number;
    scaleHandle(): MethodHandle;
    targetLayout(): Optional<MemoryLayout>;
    varHandle(): VarHandle;
    withByteAlignment(arg0: number): AddressLayout;
    withName(arg0: string): AddressLayout;
    withOrder(arg0: ByteOrder): AddressLayout;
    withTargetLayout(arg0: MemoryLayout): AddressLayout;
    withoutName(): AddressLayout;
    withoutTargetLayout(): AddressLayout;
}