import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTensorCopyARM extends Struct<VkTensorCopyARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DIMENSIONCOUNT: number;
    static PDSTOFFSET: number;
    static PEXTENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSRCOFFSET: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkTensorCopyARM;
    static calloc(paramarg0: MemoryStack): VkTensorCopyARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTensorCopyARM;
    static create(paramarg0: number): VkTensorCopyARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTensorCopyARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTensorCopyARM;
    static malloc(paramarg0: MemoryStack): VkTensorCopyARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndimensionCount(paramarg0: number): number;
    static ndimensionCount(paramarg0: number, paramarg1: number): void;
    static npDstOffset(paramarg0: number): LongBuffer;
    static npDstOffset(paramarg0: number, paramarg1: LongBuffer): void;
    static npExtent(paramarg0: number): LongBuffer;
    static npExtent(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSrcOffset(paramarg0: number): LongBuffer;
    static npSrcOffset(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTensorCopyARM;
    dimensionCount(): number;
    dimensionCount(arg0: number): VkTensorCopyARM;
    pDstOffset(): LongBuffer;
    pDstOffset(arg0: LongBuffer): VkTensorCopyARM;
    pExtent(): LongBuffer;
    pExtent(arg0: LongBuffer): VkTensorCopyARM;
    pNext(): number;
    pNext(arg0: number): VkTensorCopyARM;
    pSrcOffset(): LongBuffer;
    pSrcOffset(arg0: LongBuffer): VkTensorCopyARM;
    sType(): number;
    sType(arg0: number): VkTensorCopyARM;
    sType$Default(): VkTensorCopyARM;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: LongBuffer, arg5: LongBuffer): VkTensorCopyARM;
    set(arg0: VkTensorCopyARM): VkTensorCopyARM;
    sizeof(): number;
}