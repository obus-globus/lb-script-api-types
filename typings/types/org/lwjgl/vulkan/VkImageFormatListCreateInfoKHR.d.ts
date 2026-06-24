import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageFormatListCreateInfo } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfo.d.ts'
export class VkImageFormatListCreateInfoKHR extends VkImageFormatListCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWFORMATS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWFORMATCOUNT: number;
    static calloc(): VkImageFormatListCreateInfo;
    static calloc(paramarg0: MemoryStack): VkImageFormatListCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageFormatListCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImageFormatListCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageFormatListCreateInfo;
    static create(paramarg0: number): VkImageFormatListCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageFormatListCreateInfoKHR;
    static create(paramarg0: number): VkImageFormatListCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageFormatListCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageFormatListCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageFormatListCreateInfo;
    static malloc(paramarg0: MemoryStack): VkImageFormatListCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageFormatListCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImageFormatListCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewFormats(paramarg0: number): IntBuffer;
    static npViewFormats(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewFormatCount(paramarg0: number): number;
    static nviewFormatCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageFormatListCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkImageFormatListCreateInfoKHR;
    pViewFormats(): IntBuffer;
    pViewFormats(arg0: IntBuffer): VkImageFormatListCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkImageFormatListCreateInfoKHR;
    sType$Default(): VkImageFormatListCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkImageFormatListCreateInfoKHR;
    set(arg0: VkImageFormatListCreateInfo): VkImageFormatListCreateInfo;
    set(arg0: VkImageFormatListCreateInfoKHR): VkImageFormatListCreateInfoKHR;
}