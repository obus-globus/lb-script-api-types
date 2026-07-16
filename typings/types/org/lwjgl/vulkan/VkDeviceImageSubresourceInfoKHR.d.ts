import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceImageSubresourceInfo } from '../../../org/lwjgl/vulkan/VkDeviceImageSubresourceInfo.d.ts'
import type { VkImageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageCreateInfo.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
export class VkDeviceImageSubresourceInfoKHR extends VkDeviceImageSubresourceInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCREATEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSUBRESOURCE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceImageSubresourceInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDeviceImageSubresourceInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfoKHR;
    static create(): VkDeviceImageSubresourceInfo;
    static create(paramarg0: number): VkDeviceImageSubresourceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDeviceImageSubresourceInfoKHR;
    static create(paramarg0: number): VkDeviceImageSubresourceInfoKHR;
    static createSafe(paramarg0: number): VkDeviceImageSubresourceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceImageSubresourceInfoKHR;
    static malloc(): VkDeviceImageSubresourceInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDeviceImageSubresourceInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfoKHR;
    static npCreateInfo(paramarg0: number): VkImageCreateInfo;
    static npCreateInfo(paramarg0: number, paramarg1: VkImageCreateInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSubresource(paramarg0: number): VkImageSubresource2;
    static npSubresource(paramarg0: number, paramarg1: VkImageSubresource2): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDeviceImageSubresourceInfoKHR;
    pCreateInfo(): VkImageCreateInfo;
    pCreateInfo(arg0: VkImageCreateInfo): VkDeviceImageSubresourceInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDeviceImageSubresourceInfoKHR;
    pSubresource(): VkImageSubresource2;
    pSubresource(arg0: VkImageSubresource2): VkDeviceImageSubresourceInfoKHR;
    sType(): number;
    sType(arg0: number): VkDeviceImageSubresourceInfoKHR;
    sType$Default(): VkDeviceImageSubresourceInfoKHR;
    set(arg0: number, arg1: number, arg2: VkImageCreateInfo, arg3: VkImageSubresource2): VkDeviceImageSubresourceInfoKHR;
    set(arg0: VkDeviceImageSubresourceInfo): VkDeviceImageSubresourceInfo;
    set(arg0: VkDeviceImageSubresourceInfoKHR): VkDeviceImageSubresourceInfoKHR;
}