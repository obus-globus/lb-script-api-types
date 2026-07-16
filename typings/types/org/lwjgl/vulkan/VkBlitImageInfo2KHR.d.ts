import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBlitImageCubicWeightsInfoQCOM } from '../../../org/lwjgl/vulkan/VkBlitImageCubicWeightsInfoQCOM.d.ts'
import type { VkBlitImageInfo2 } from '../../../org/lwjgl/vulkan/VkBlitImageInfo2.d.ts'
export class VkBlitImageInfo2KHR extends VkBlitImageInfo2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTIMAGE: number;
    static DSTIMAGELAYOUT: number;
    static FILTER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCIMAGE: number;
    static SRCIMAGELAYOUT: number;
    static STYPE: number;
    static calloc(): VkBlitImageInfo2;
    static calloc(paramarg0: MemoryStack): VkBlitImageInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBlitImageInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkBlitImageInfo2KHR;
    static create(): VkBlitImageInfo2;
    static create(paramarg0: number): VkBlitImageInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBlitImageInfo2KHR;
    static create(paramarg0: number): VkBlitImageInfo2KHR;
    static createSafe(paramarg0: number): VkBlitImageInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBlitImageInfo2KHR;
    static malloc(): VkBlitImageInfo2;
    static malloc(paramarg0: MemoryStack): VkBlitImageInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBlitImageInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkBlitImageInfo2KHR;
    static ndstImage(paramarg0: number): number;
    static ndstImage(paramarg0: number, paramarg1: number): void;
    static ndstImageLayout(paramarg0: number): number;
    static ndstImageLayout(paramarg0: number, paramarg1: number): void;
    static nfilter(paramarg0: number): number;
    static nfilter(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRegions(paramarg0: number): (Object | null)[];
    static npRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nregionCount(paramarg0: number): number;
    static nregionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcImage(paramarg0: number): number;
    static nsrcImage(paramarg0: number, paramarg1: number): void;
    static nsrcImageLayout(paramarg0: number): number;
    static nsrcImageLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBlitImageInfo2KHR;
    dstImage(): number;
    dstImage(arg0: number): VkBlitImageInfo2KHR;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkBlitImageInfo2KHR;
    filter(): number;
    filter(arg0: number): VkBlitImageInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkBlitImageInfo2KHR;
    pNext(arg0: VkBlitImageCubicWeightsInfoQCOM): VkBlitImageInfo2;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkBlitImageInfo2KHR;
    sType(): number;
    sType(arg0: number): VkBlitImageInfo2KHR;
    sType$Default(): VkBlitImageInfo2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: (Object | null)[], arg7: number): VkBlitImageInfo2KHR;
    set(arg0: VkBlitImageInfo2): VkBlitImageInfo2;
    set(arg0: VkBlitImageInfo2KHR): VkBlitImageInfo2KHR;
    srcImage(): number;
    srcImage(arg0: number): VkBlitImageInfo2KHR;
    srcImageLayout(): number;
    srcImageLayout(arg0: number): VkBlitImageInfo2KHR;
}