import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyMemoryToImageInfo } from '../../../org/lwjgl/vulkan/VkCopyMemoryToImageInfo.d.ts'
export class VkCopyMemoryToImageInfoEXT extends VkCopyMemoryToImageInfo {
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
    static STYPE: number;
    static calloc(): VkCopyMemoryToImageInfo;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToImageInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyMemoryToImageInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToImageInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMemoryToImageInfo;
    static create(paramarg0: number): VkCopyMemoryToImageInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyMemoryToImageInfoEXT;
    static create(paramarg0: number): VkCopyMemoryToImageInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToImageInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToImageInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMemoryToImageInfo;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToImageInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyMemoryToImageInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToImageInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryToImageInfoEXT;
    dstImage(): number;
    dstImage(arg0: number): VkCopyMemoryToImageInfoEXT;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkCopyMemoryToImageInfoEXT;
    flags(): number;
    flags(arg0: number): VkCopyMemoryToImageInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCopyMemoryToImageInfoEXT;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyMemoryToImageInfoEXT;
    sType(): number;
    sType(arg0: number): VkCopyMemoryToImageInfoEXT;
    sType$Default(): VkCopyMemoryToImageInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkCopyMemoryToImageInfoEXT;
    set(arg0: VkCopyMemoryToImageInfo): VkCopyMemoryToImageInfo;
    set(arg0: VkCopyMemoryToImageInfoEXT): VkCopyMemoryToImageInfoEXT;
}