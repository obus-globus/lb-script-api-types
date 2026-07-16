import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyImageToImageInfo } from '../../../org/lwjgl/vulkan/VkCopyImageToImageInfo.d.ts'
export class VkCopyImageToImageInfoEXT extends VkCopyImageToImageInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTIMAGE: number;
    static DSTIMAGELAYOUT: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCIMAGE: number;
    static SRCIMAGELAYOUT: number;
    static STYPE: number;
    static calloc(): VkCopyImageToImageInfo;
    static calloc(paramarg0: MemoryStack): VkCopyImageToImageInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyImageToImageInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCopyImageToImageInfoEXT;
    static create(): VkCopyImageToImageInfo;
    static create(paramarg0: number): VkCopyImageToImageInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyImageToImageInfoEXT;
    static create(paramarg0: number): VkCopyImageToImageInfoEXT;
    static createSafe(paramarg0: number): VkCopyImageToImageInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyImageToImageInfoEXT;
    static malloc(): VkCopyImageToImageInfo;
    static malloc(paramarg0: MemoryStack): VkCopyImageToImageInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyImageToImageInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCopyImageToImageInfoEXT;
    static ndstImage(paramarg0: number): number;
    static ndstImage(paramarg0: number, paramarg1: number): void;
    static ndstImageLayout(paramarg0: number): number;
    static ndstImageLayout(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkCopyImageToImageInfoEXT;
    dstImage(): number;
    dstImage(arg0: number): VkCopyImageToImageInfoEXT;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkCopyImageToImageInfoEXT;
    flags(): number;
    flags(arg0: number): VkCopyImageToImageInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCopyImageToImageInfoEXT;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyImageToImageInfoEXT;
    sType(): number;
    sType(arg0: number): VkCopyImageToImageInfoEXT;
    sType$Default(): VkCopyImageToImageInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: (Object | null)[]): VkCopyImageToImageInfoEXT;
    set(arg0: VkCopyImageToImageInfo): VkCopyImageToImageInfo;
    set(arg0: VkCopyImageToImageInfoEXT): VkCopyImageToImageInfoEXT;
    srcImage(): number;
    srcImage(arg0: number): VkCopyImageToImageInfoEXT;
    srcImageLayout(): number;
    srcImageLayout(arg0: number): VkCopyImageToImageInfoEXT;
}