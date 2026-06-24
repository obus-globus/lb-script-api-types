import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkHostImageLayoutTransitionInfo } from '../../../org/lwjgl/vulkan/VkHostImageLayoutTransitionInfo.d.ts'
import type { VkImageSubresourceRange } from '../../../org/lwjgl/vulkan/VkImageSubresourceRange.d.ts'
export class VkHostImageLayoutTransitionInfoEXT extends VkHostImageLayoutTransitionInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static NEWLAYOUT: number;
    static OLDLAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBRESOURCERANGE: number;
    static calloc(): VkHostImageLayoutTransitionInfo;
    static calloc(paramarg0: MemoryStack): VkHostImageLayoutTransitionInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkHostImageLayoutTransitionInfoEXT;
    static calloc(paramarg0: MemoryStack): VkHostImageLayoutTransitionInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkHostImageLayoutTransitionInfo;
    static create(paramarg0: number): VkHostImageLayoutTransitionInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkHostImageLayoutTransitionInfoEXT;
    static create(paramarg0: number): VkHostImageLayoutTransitionInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkHostImageLayoutTransitionInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkHostImageLayoutTransitionInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkHostImageLayoutTransitionInfo;
    static malloc(paramarg0: MemoryStack): VkHostImageLayoutTransitionInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkHostImageLayoutTransitionInfoEXT;
    static malloc(paramarg0: MemoryStack): VkHostImageLayoutTransitionInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static nnewLayout(paramarg0: number): number;
    static nnewLayout(paramarg0: number, paramarg1: number): void;
    static noldLayout(paramarg0: number): number;
    static noldLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubresourceRange(paramarg0: number): VkImageSubresourceRange;
    static nsubresourceRange(paramarg0: number, paramarg1: VkImageSubresourceRange): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkHostImageLayoutTransitionInfoEXT;
    image(): number;
    image(arg0: number): VkHostImageLayoutTransitionInfoEXT;
    newLayout(): number;
    newLayout(arg0: number): VkHostImageLayoutTransitionInfoEXT;
    oldLayout(): number;
    oldLayout(arg0: number): VkHostImageLayoutTransitionInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkHostImageLayoutTransitionInfoEXT;
    sType(): number;
    sType(arg0: number): VkHostImageLayoutTransitionInfoEXT;
    sType$Default(): VkHostImageLayoutTransitionInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkImageSubresourceRange): VkHostImageLayoutTransitionInfoEXT;
    set(arg0: VkHostImageLayoutTransitionInfo): VkHostImageLayoutTransitionInfo;
    set(arg0: VkHostImageLayoutTransitionInfoEXT): VkHostImageLayoutTransitionInfoEXT;
    subresourceRange(): VkImageSubresourceRange;
    subresourceRange(arg0: (param0: VkImageSubresourceRange) => void): VkHostImageLayoutTransitionInfoEXT;
    subresourceRange(arg0: VkImageSubresourceRange): VkHostImageLayoutTransitionInfoEXT;
}