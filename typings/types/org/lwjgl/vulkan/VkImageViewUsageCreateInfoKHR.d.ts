import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageViewUsageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageViewUsageCreateInfo.d.ts'
export class VkImageViewUsageCreateInfoKHR extends VkImageViewUsageCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static calloc(): VkImageViewUsageCreateInfo;
    static calloc(paramarg0: MemoryStack): VkImageViewUsageCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageViewUsageCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImageViewUsageCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageViewUsageCreateInfo;
    static create(paramarg0: number): VkImageViewUsageCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageViewUsageCreateInfoKHR;
    static create(paramarg0: number): VkImageViewUsageCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageViewUsageCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageViewUsageCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageViewUsageCreateInfo;
    static malloc(paramarg0: MemoryStack): VkImageViewUsageCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageViewUsageCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImageViewUsageCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageViewUsageCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkImageViewUsageCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkImageViewUsageCreateInfoKHR;
    sType$Default(): VkImageViewUsageCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkImageViewUsageCreateInfoKHR;
    set(arg0: VkImageViewUsageCreateInfo): VkImageViewUsageCreateInfo;
    set(arg0: VkImageViewUsageCreateInfoKHR): VkImageViewUsageCreateInfoKHR;
    usage(): number;
    usage(arg0: number): VkImageViewUsageCreateInfoKHR;
}