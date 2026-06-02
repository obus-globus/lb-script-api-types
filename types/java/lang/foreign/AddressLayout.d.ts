import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AddressLayout extends ValueLayout, Object{
    targetLayout(): Optional<MemoryLayout>;
    withByteAlignment(arg0: number): AddressLayout;
    withName(arg0: string): AddressLayout;
    withOrder(arg0: ByteOrder): AddressLayout;
    withTargetLayout(arg0: MemoryLayout): AddressLayout;
    withoutName(): AddressLayout;
    withoutTargetLayout(): AddressLayout;
}