import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkComponentMapping } from '../../../org/lwjgl/vulkan/VkComponentMapping.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkImageSubresourceRange } from '../../../org/lwjgl/vulkan/VkImageSubresourceRange.d.ts'
import type { VkImageViewASTCDecodeModeEXT } from '../../../org/lwjgl/vulkan/VkImageViewASTCDecodeModeEXT.d.ts'
import type { VkImageViewMinLodCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageViewMinLodCreateInfoEXT.d.ts'
import type { VkImageViewSampleWeightCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkImageViewSampleWeightCreateInfoQCOM.d.ts'
import type { VkImageViewSlicedCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageViewSlicedCreateInfoEXT.d.ts'
import type { VkImageViewUsageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageViewUsageCreateInfo.d.ts'
import type { VkImageViewUsageCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkImageViewUsageCreateInfoKHR.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
import type { VkSamplerYcbcrConversionInfo } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionInfo.d.ts'
import type { VkSamplerYcbcrConversionInfoKHR } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionInfoKHR.d.ts'
export class VkImageViewCreateInfo extends Struct<VkImageViewCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPONENTS: number;
    static FLAGS: number;
    static FORMAT: number;
    static IMAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBRESOURCERANGE: number;
    static VIEWTYPE: number;
    static calloc(): VkImageViewCreateInfo;
    static calloc(paramarg0: MemoryStack): VkImageViewCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageViewCreateInfo;
    static create(paramarg0: number): VkImageViewCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageViewCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageViewCreateInfo;
    static malloc(paramarg0: MemoryStack): VkImageViewCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomponents(paramarg0: number): VkComponentMapping;
    static ncomponents(paramarg0: number, paramarg1: VkComponentMapping): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubresourceRange(paramarg0: number): VkImageSubresourceRange;
    static nsubresourceRange(paramarg0: number, paramarg1: VkImageSubresourceRange): void;
    static nviewType(paramarg0: number): number;
    static nviewType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    components(): VkComponentMapping;
    components(arg0: (param0: VkComponentMapping) => void): VkImageViewCreateInfo;
    components(arg0: VkComponentMapping): VkImageViewCreateInfo;
    create(arg0: number, arg1: ByteBuffer): VkImageViewCreateInfo;
    flags(): number;
    flags(arg0: number): VkImageViewCreateInfo;
    format(): number;
    format(arg0: number): VkImageViewCreateInfo;
    image(): number;
    image(arg0: number): VkImageViewCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkImageViewCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewASTCDecodeModeEXT): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewMinLodCreateInfoEXT): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewSampleWeightCreateInfoQCOM): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewSlicedCreateInfoEXT): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewUsageCreateInfo): VkImageViewCreateInfo;
    pNext(arg0: VkImageViewUsageCreateInfoKHR): VkImageViewCreateInfo;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkImageViewCreateInfo;
    pNext(arg0: VkSamplerYcbcrConversionInfo): VkImageViewCreateInfo;
    pNext(arg0: VkSamplerYcbcrConversionInfoKHR): VkImageViewCreateInfo;
    sType(): number;
    sType(arg0: number): VkImageViewCreateInfo;
    sType$Default(): VkImageViewCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: VkComponentMapping, arg7: VkImageSubresourceRange): VkImageViewCreateInfo;
    set(arg0: VkImageViewCreateInfo): VkImageViewCreateInfo;
    sizeof(): number;
    subresourceRange(): VkImageSubresourceRange;
    subresourceRange(arg0: (param0: VkImageSubresourceRange) => void): VkImageViewCreateInfo;
    subresourceRange(arg0: VkImageSubresourceRange): VkImageViewCreateInfo;
    viewType(): number;
    viewType(arg0: number): VkImageViewCreateInfo;
}