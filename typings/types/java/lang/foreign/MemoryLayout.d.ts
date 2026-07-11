import type { MemoryLayout$PathElement } from '../../../java/lang/foreign/MemoryLayout$PathElement.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemoryLayout extends Object{
    arrayElementVarHandle(...arg0: MemoryLayout$PathElement[]): VarHandle;
    byteAlignment(): number;
    byteOffset(...arg0: MemoryLayout$PathElement[]): number;
    byteOffsetHandle(...arg0: MemoryLayout$PathElement[]): MethodHandle;
    byteSize(): number;
    name(): Optional<string>;
    scale(arg0: number, arg1: number): number;
    scaleHandle(): MethodHandle;
    select(...arg0: MemoryLayout$PathElement[]): MemoryLayout;
    sliceHandle(...arg0: MemoryLayout$PathElement[]): MethodHandle;
    varHandle(...arg0: MemoryLayout$PathElement[]): VarHandle;
    withByteAlignment(arg0: number): MemoryLayout;
    withName(arg0: string): MemoryLayout;
    withoutName(): MemoryLayout;
}