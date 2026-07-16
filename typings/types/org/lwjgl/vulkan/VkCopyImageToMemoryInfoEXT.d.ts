import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyImageToMemoryInfo } from '../../../org/lwjgl/vulkan/VkCopyImageToMemoryInfo.d.ts'
export class VkCopyImageToMemoryInfoEXT extends VkCopyImageToMemoryInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
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
    static calloc(): VkCopyImageToMemoryInfo;
    static calloc(paramarg0: MemoryStack): VkCopyImageToMemoryInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyImageToMemoryInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCopyImageToMemoryInfoEXT;
    static create(): VkCopyImageToMemoryInfo;
    static create(paramarg0: number): VkCopyImageToMemoryInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyImageToMemoryInfoEXT;
    static create(paramarg0: number): VkCopyImageToMemoryInfoEXT;
    static createSafe(paramarg0: number): VkCopyImageToMemoryInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyImageToMemoryInfoEXT;
    static malloc(): VkCopyImageToMemoryInfo;
    static malloc(paramarg0: MemoryStack): VkCopyImageToMemoryInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyImageToMemoryInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCopyImageToMemoryInfoEXT;
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
    create(arg0: number, arg1: ByteBuffer): VkCopyImageToMemoryInfoEXT;
    flags(): number;
    flags(arg0: number): VkCopyImageToMemoryInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCopyImageToMemoryInfoEXT;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyImageToMemoryInfoEXT;
    sType(): number;
    sType(arg0: number): VkCopyImageToMemoryInfoEXT;
    sType$Default(): VkCopyImageToMemoryInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkCopyImageToMemoryInfoEXT;
    set(arg0: VkCopyImageToMemoryInfo): VkCopyImageToMemoryInfo;
    set(arg0: VkCopyImageToMemoryInfoEXT): VkCopyImageToMemoryInfoEXT;
    srcImage(): number;
    srcImage(arg0: number): VkCopyImageToMemoryInfoEXT;
    srcImageLayout(): number;
    srcImageLayout(arg0: number): VkCopyImageToMemoryInfoEXT;
}