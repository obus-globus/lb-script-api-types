import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageStencilUsageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageStencilUsageCreateInfo.d.ts'
export class VkImageStencilUsageCreateInfoEXT extends VkImageStencilUsageCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILUSAGE: number;
    static STYPE: number;
    static calloc(): VkImageStencilUsageCreateInfo;
    static calloc(paramarg0: MemoryStack): VkImageStencilUsageCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageStencilUsageCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImageStencilUsageCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageStencilUsageCreateInfo;
    static create(paramarg0: number): VkImageStencilUsageCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageStencilUsageCreateInfoEXT;
    static create(paramarg0: number): VkImageStencilUsageCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageStencilUsageCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageStencilUsageCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageStencilUsageCreateInfo;
    static malloc(paramarg0: MemoryStack): VkImageStencilUsageCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageStencilUsageCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImageStencilUsageCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilUsage(paramarg0: number): number;
    static nstencilUsage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageStencilUsageCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImageStencilUsageCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkImageStencilUsageCreateInfoEXT;
    sType$Default(): VkImageStencilUsageCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkImageStencilUsageCreateInfoEXT;
    set(arg0: VkImageStencilUsageCreateInfo): VkImageStencilUsageCreateInfo;
    set(arg0: VkImageStencilUsageCreateInfoEXT): VkImageStencilUsageCreateInfoEXT;
    stencilUsage(): number;
    stencilUsage(arg0: number): VkImageStencilUsageCreateInfoEXT;
}