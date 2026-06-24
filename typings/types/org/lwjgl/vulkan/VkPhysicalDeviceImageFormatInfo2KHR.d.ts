import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageCompressionControlEXT } from '../../../org/lwjgl/vulkan/VkImageCompressionControlEXT.d.ts'
import type { VkImageFormatListCreateInfo } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfo.d.ts'
import type { VkImageFormatListCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfoKHR.d.ts'
import type { VkImageStencilUsageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageStencilUsageCreateInfo.d.ts'
import type { VkImageStencilUsageCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageStencilUsageCreateInfoEXT.d.ts'
import type { VkOpticalFlowImageFormatInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowImageFormatInfoNV.d.ts'
import type { VkPhysicalDeviceExternalImageFormatInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalImageFormatInfo.d.ts'
import type { VkPhysicalDeviceExternalImageFormatInfoKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalImageFormatInfoKHR.d.ts'
import type { VkPhysicalDeviceImageDrmFormatModifierInfoEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImageDrmFormatModifierInfoEXT.d.ts'
import type { VkPhysicalDeviceImageFormatInfo2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImageFormatInfo2.d.ts'
import type { VkPhysicalDeviceImageViewImageFormatInfoEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImageViewImageFormatInfoEXT.d.ts'
import type { VkVideoProfileListInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileListInfoKHR.d.ts'
export class VkPhysicalDeviceImageFormatInfo2KHR extends VkPhysicalDeviceImageFormatInfo2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILING: number;
    static TYPE: number;
    static USAGE: number;
    static calloc(): VkPhysicalDeviceImageFormatInfo2;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageFormatInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceImageFormatInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageFormatInfo2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceImageFormatInfo2;
    static create(paramarg0: number): VkPhysicalDeviceImageFormatInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceImageFormatInfo2KHR;
    static create(paramarg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImageFormatInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceImageFormatInfo2;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageFormatInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceImageFormatInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageFormatInfo2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntiling(paramarg0: number): number;
    static ntiling(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImageFormatInfo2KHR;
    flags(): number;
    flags(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    format(): number;
    format(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    pNext(arg0: VkImageCompressionControlEXT): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkImageFormatListCreateInfo): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkImageFormatListCreateInfoKHR): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkImageStencilUsageCreateInfo): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkImageStencilUsageCreateInfoEXT): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkOpticalFlowImageFormatInfoNV): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkPhysicalDeviceExternalImageFormatInfo): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkPhysicalDeviceExternalImageFormatInfoKHR): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkPhysicalDeviceImageDrmFormatModifierInfoEXT): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkPhysicalDeviceImageViewImageFormatInfoEXT): VkPhysicalDeviceImageFormatInfo2;
    pNext(arg0: VkVideoProfileListInfoKHR): VkPhysicalDeviceImageFormatInfo2;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    sType$Default(): VkPhysicalDeviceImageFormatInfo2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkPhysicalDeviceImageFormatInfo2KHR;
    set(arg0: VkPhysicalDeviceImageFormatInfo2): VkPhysicalDeviceImageFormatInfo2;
    set(arg0: VkPhysicalDeviceImageFormatInfo2KHR): VkPhysicalDeviceImageFormatInfo2KHR;
    tiling(): number;
    tiling(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    type(): number;
    type(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
    usage(): number;
    usage(arg0: number): VkPhysicalDeviceImageFormatInfo2KHR;
}