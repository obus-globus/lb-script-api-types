import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCopyTensorInfoARM extends Struct<VkCopyTensorInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTTENSOR: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCTENSOR: number;
    static STYPE: number;
    static calloc(): VkCopyTensorInfoARM;
    static calloc(paramarg0: MemoryStack): VkCopyTensorInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyTensorInfoARM;
    static create(paramarg0: number): VkCopyTensorInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyTensorInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyTensorInfoARM;
    static malloc(paramarg0: MemoryStack): VkCopyTensorInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstTensor(paramarg0: number): number;
    static ndstTensor(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRegions(paramarg0: number): (Object | null)[];
    static npRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nregionCount(paramarg0: number): number;
    static nregionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcTensor(paramarg0: number): number;
    static nsrcTensor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyTensorInfoARM;
    dstTensor(): number;
    dstTensor(arg0: number): VkCopyTensorInfoARM;
    pNext(): number;
    pNext(arg0: number): VkCopyTensorInfoARM;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyTensorInfoARM;
    regionCount(): number;
    sType(): number;
    sType(arg0: number): VkCopyTensorInfoARM;
    sType$Default(): VkCopyTensorInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): VkCopyTensorInfoARM;
    set(arg0: VkCopyTensorInfoARM): VkCopyTensorInfoARM;
    sizeof(): number;
    srcTensor(): number;
    srcTensor(arg0: number): VkCopyTensorInfoARM;
}