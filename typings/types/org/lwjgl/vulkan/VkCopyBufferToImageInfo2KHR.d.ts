import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyBufferToImageInfo2 } from '../../../org/lwjgl/vulkan/VkCopyBufferToImageInfo2.d.ts'
export class VkCopyBufferToImageInfo2KHR extends VkCopyBufferToImageInfo2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTIMAGE: number;
    static DSTIMAGELAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCBUFFER: number;
    static STYPE: number;
    static calloc(): VkCopyBufferToImageInfo2;
    static calloc(paramarg0: MemoryStack): VkCopyBufferToImageInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyBufferToImageInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkCopyBufferToImageInfo2KHR;
    static create(): VkCopyBufferToImageInfo2;
    static create(paramarg0: number): VkCopyBufferToImageInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyBufferToImageInfo2KHR;
    static create(paramarg0: number): VkCopyBufferToImageInfo2KHR;
    static createSafe(paramarg0: number): VkCopyBufferToImageInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyBufferToImageInfo2KHR;
    static malloc(): VkCopyBufferToImageInfo2;
    static malloc(paramarg0: MemoryStack): VkCopyBufferToImageInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyBufferToImageInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkCopyBufferToImageInfo2KHR;
    static ndstImage(paramarg0: number): number;
    static ndstImage(paramarg0: number, paramarg1: number): void;
    static ndstImageLayout(paramarg0: number): number;
    static ndstImageLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRegions(paramarg0: number): (Object | null)[];
    static npRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nregionCount(paramarg0: number): number;
    static nregionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcBuffer(paramarg0: number): number;
    static nsrcBuffer(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkCopyBufferToImageInfo2KHR;
    dstImage(): number;
    dstImage(arg0: number): VkCopyBufferToImageInfo2KHR;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkCopyBufferToImageInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkCopyBufferToImageInfo2KHR;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyBufferToImageInfo2KHR;
    sType(): number;
    sType(arg0: number): VkCopyBufferToImageInfo2KHR;
    sType$Default(): VkCopyBufferToImageInfo2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkCopyBufferToImageInfo2KHR;
    set(arg0: VkCopyBufferToImageInfo2): VkCopyBufferToImageInfo2;
    set(arg0: VkCopyBufferToImageInfo2KHR): VkCopyBufferToImageInfo2KHR;
    srcBuffer(): number;
    srcBuffer(arg0: number): VkCopyBufferToImageInfo2KHR;
}