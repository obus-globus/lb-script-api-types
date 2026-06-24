import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTensorDescriptionARM extends Struct<VkTensorDescriptionARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DIMENSIONCOUNT: number;
    static FORMAT: number;
    static PDIMENSIONS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTRIDES: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILING: number;
    static USAGE: number;
    static calloc(): VkTensorDescriptionARM;
    static calloc(paramarg0: MemoryStack): VkTensorDescriptionARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTensorDescriptionARM;
    static create(paramarg0: number): VkTensorDescriptionARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTensorDescriptionARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTensorDescriptionARM;
    static malloc(paramarg0: MemoryStack): VkTensorDescriptionARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndimensionCount(paramarg0: number): number;
    static ndimensionCount(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npDimensions(paramarg0: number): LongBuffer;
    static npDimensions(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStrides(paramarg0: number): LongBuffer;
    static npStrides(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntiling(paramarg0: number): number;
    static ntiling(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTensorDescriptionARM;
    dimensionCount(): number;
    dimensionCount(arg0: number): VkTensorDescriptionARM;
    format(): number;
    format(arg0: number): VkTensorDescriptionARM;
    pDimensions(): LongBuffer;
    pDimensions(arg0: LongBuffer): VkTensorDescriptionARM;
    pNext(): number;
    pNext(arg0: number): VkTensorDescriptionARM;
    pStrides(): LongBuffer;
    pStrides(arg0: LongBuffer): VkTensorDescriptionARM;
    sType(): number;
    sType(arg0: number): VkTensorDescriptionARM;
    sType$Default(): VkTensorDescriptionARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: LongBuffer, arg6: LongBuffer, arg7: number): VkTensorDescriptionARM;
    set(arg0: VkTensorDescriptionARM): VkTensorDescriptionARM;
    sizeof(): number;
    tiling(): number;
    tiling(arg0: number): VkTensorDescriptionARM;
    usage(): number;
    usage(arg0: number): VkTensorDescriptionARM;
}