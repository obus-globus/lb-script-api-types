import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageSubresource } from '../../../org/lwjgl/vulkan/VkImageSubresource.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
export class VkImageSubresource2EXT extends VkImageSubresource2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGESUBRESOURCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageSubresource2;
    static calloc(paramarg0: MemoryStack): VkImageSubresource2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageSubresource2EXT;
    static calloc(paramarg0: MemoryStack): VkImageSubresource2EXT;
    static create(): VkImageSubresource2;
    static create(paramarg0: number): VkImageSubresource2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageSubresource2EXT;
    static create(paramarg0: number): VkImageSubresource2EXT;
    static createSafe(paramarg0: number): VkImageSubresource2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSubresource2EXT;
    static malloc(): VkImageSubresource2;
    static malloc(paramarg0: MemoryStack): VkImageSubresource2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageSubresource2EXT;
    static malloc(paramarg0: MemoryStack): VkImageSubresource2EXT;
    static nimageSubresource(paramarg0: number): VkImageSubresource;
    static nimageSubresource(paramarg0: number, paramarg1: VkImageSubresource): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageSubresource2EXT;
    imageSubresource(): VkImageSubresource;
    imageSubresource(arg0: (param0: VkImageSubresource) => void): VkImageSubresource2EXT;
    imageSubresource(arg0: VkImageSubresource): VkImageSubresource2EXT;
    pNext(): number;
    pNext(arg0: number): VkImageSubresource2EXT;
    sType(): number;
    sType(arg0: number): VkImageSubresource2EXT;
    sType$Default(): VkImageSubresource2EXT;
    set(arg0: number, arg1: number, arg2: VkImageSubresource): VkImageSubresource2EXT;
    set(arg0: VkImageSubresource2): VkImageSubresource2;
    set(arg0: VkImageSubresource2EXT): VkImageSubresource2EXT;
}