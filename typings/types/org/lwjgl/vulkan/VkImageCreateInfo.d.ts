import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDedicatedAllocationImageCreateInfoNV } from '../../../org/lwjgl/vulkan/VkDedicatedAllocationImageCreateInfoNV.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkExternalFormatANDROID } from '../../../org/lwjgl/vulkan/VkExternalFormatANDROID.d.ts'
import type { VkExternalMemoryImageCreateInfo } from '../../../org/lwjgl/vulkan/VkExternalMemoryImageCreateInfo.d.ts'
import type { VkExternalMemoryImageCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkExternalMemoryImageCreateInfoKHR.d.ts'
import type { VkExternalMemoryImageCreateInfoNV } from '../../../org/lwjgl/vulkan/VkExternalMemoryImageCreateInfoNV.d.ts'
import type { VkImageAlignmentControlCreateInfoMESA } from '../../../org/lwjgl/vulkan/VkImageAlignmentControlCreateInfoMESA.d.ts'
import type { VkImageCompressionControlEXT } from '../../../org/lwjgl/vulkan/VkImageCompressionControlEXT.d.ts'
import type { VkImageDrmFormatModifierExplicitCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageDrmFormatModifierExplicitCreateInfoEXT.d.ts'
import type { VkImageDrmFormatModifierListCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageDrmFormatModifierListCreateInfoEXT.d.ts'
import type { VkImageFormatListCreateInfo } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfo.d.ts'
import type { VkImageFormatListCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkImageFormatListCreateInfoKHR.d.ts'
import type { VkImageStencilUsageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageStencilUsageCreateInfo.d.ts'
import type { VkImageStencilUsageCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkImageStencilUsageCreateInfoEXT.d.ts'
import type { VkImageSwapchainCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkImageSwapchainCreateInfoKHR.d.ts'
import type { VkImportMetalIOSurfaceInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMetalIOSurfaceInfoEXT.d.ts'
import type { VkImportMetalTextureInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMetalTextureInfoEXT.d.ts'
import type { VkOpaqueCaptureDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDataCreateInfoEXT.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
import type { VkOpticalFlowImageFormatInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowImageFormatInfoNV.d.ts'
import type { VkVideoProfileListInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileListInfoKHR.d.ts'
export class VkImageCreateInfo extends Struct<VkImageCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ARRAYLAYERS: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENT: number;
    static FLAGS: number;
    static FORMAT: number;
    static IMAGETYPE: number;
    static INITIALLAYOUT: number;
    static MIPLEVELS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEFAMILYINDICES: number;
    static QUEUEFAMILYINDEXCOUNT: number;
    static SAMPLES: number;
    static SHARINGMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILING: number;
    static USAGE: number;
    static calloc(): VkImageCreateInfo;
    static calloc(paramarg0: MemoryStack): VkImageCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageCreateInfo;
    static create(paramarg0: number): VkImageCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageCreateInfo;
    static malloc(paramarg0: MemoryStack): VkImageCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narrayLayers(paramarg0: number): number;
    static narrayLayers(paramarg0: number, paramarg1: number): void;
    static nextent(paramarg0: number): VkExtent3D;
    static nextent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nimageType(paramarg0: number): number;
    static nimageType(paramarg0: number, paramarg1: number): void;
    static ninitialLayout(paramarg0: number): number;
    static ninitialLayout(paramarg0: number, paramarg1: number): void;
    static nmipLevels(paramarg0: number): number;
    static nmipLevels(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueueFamilyIndices(paramarg0: number): IntBuffer;
    static npQueueFamilyIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nqueueFamilyIndexCount(paramarg0: number): number;
    static nqueueFamilyIndexCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamples(paramarg0: number): number;
    static nsamples(paramarg0: number, paramarg1: number): void;
    static nsharingMode(paramarg0: number): number;
    static nsharingMode(paramarg0: number, paramarg1: number): void;
    static ntiling(paramarg0: number): number;
    static ntiling(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    arrayLayers(): number;
    arrayLayers(arg0: number): VkImageCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageCreateInfo;
    extent(): VkExtent3D;
    extent(arg0: (param0: VkExtent3D) => void): VkImageCreateInfo;
    extent(arg0: VkExtent3D): VkImageCreateInfo;
    flags(): number;
    flags(arg0: number): VkImageCreateInfo;
    format(): number;
    format(arg0: number): VkImageCreateInfo;
    imageType(): number;
    imageType(arg0: number): VkImageCreateInfo;
    initialLayout(): number;
    initialLayout(arg0: number): VkImageCreateInfo;
    mipLevels(): number;
    mipLevels(arg0: number): VkImageCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkImageCreateInfo;
    pNext(arg0: VkDedicatedAllocationImageCreateInfoNV): VkImageCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkExternalFormatANDROID): VkImageCreateInfo;
    pNext(arg0: VkExternalMemoryImageCreateInfo): VkImageCreateInfo;
    pNext(arg0: VkExternalMemoryImageCreateInfoKHR): VkImageCreateInfo;
    pNext(arg0: VkExternalMemoryImageCreateInfoNV): VkImageCreateInfo;
    pNext(arg0: VkImageAlignmentControlCreateInfoMESA): VkImageCreateInfo;
    pNext(arg0: VkImageCompressionControlEXT): VkImageCreateInfo;
    pNext(arg0: VkImageDrmFormatModifierExplicitCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkImageDrmFormatModifierListCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkImageFormatListCreateInfo): VkImageCreateInfo;
    pNext(arg0: VkImageFormatListCreateInfoKHR): VkImageCreateInfo;
    pNext(arg0: VkImageStencilUsageCreateInfo): VkImageCreateInfo;
    pNext(arg0: VkImageStencilUsageCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkImageSwapchainCreateInfoKHR): VkImageCreateInfo;
    pNext(arg0: VkImportMetalIOSurfaceInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkImportMetalTextureInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkOpaqueCaptureDataCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkImageCreateInfo;
    pNext(arg0: VkOpticalFlowImageFormatInfoNV): VkImageCreateInfo;
    pNext(arg0: VkVideoProfileListInfoKHR): VkImageCreateInfo;
    pQueueFamilyIndices(): IntBuffer;
    pQueueFamilyIndices(arg0: IntBuffer): VkImageCreateInfo;
    queueFamilyIndexCount(): number;
    queueFamilyIndexCount(arg0: number): VkImageCreateInfo;
    sType(): number;
    sType(arg0: number): VkImageCreateInfo;
    sType$Default(): VkImageCreateInfo;
    samples(): number;
    samples(arg0: number): VkImageCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkExtent3D, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: IntBuffer, arg14: number): VkImageCreateInfo;
    set(arg0: VkImageCreateInfo): VkImageCreateInfo;
    sharingMode(): number;
    sharingMode(arg0: number): VkImageCreateInfo;
    sizeof(): number;
    tiling(): number;
    tiling(arg0: number): VkImageCreateInfo;
    usage(): number;
    usage(arg0: number): VkImageCreateInfo;
}