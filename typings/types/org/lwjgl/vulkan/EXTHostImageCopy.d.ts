import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCopyImageToImageInfo } from '../../../org/lwjgl/vulkan/VkCopyImageToImageInfo.d.ts'
import type { VkCopyImageToMemoryInfo } from '../../../org/lwjgl/vulkan/VkCopyImageToMemoryInfo.d.ts'
import type { VkCopyMemoryToImageInfo } from '../../../org/lwjgl/vulkan/VkCopyMemoryToImageInfo.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
import type { VkSubresourceLayout2 } from '../../../org/lwjgl/vulkan/VkSubresourceLayout2.d.ts'
export class EXTHostImageCopy extends Object {
    static VK_EXT_HOST_IMAGE_COPY_EXTENSION_NAME: string;
    static VK_EXT_HOST_IMAGE_COPY_SPEC_VERSION: number;
    static VK_FORMAT_FEATURE_2_HOST_IMAGE_TRANSFER_BIT_EXT: number;
    static VK_HOST_IMAGE_COPY_MEMCPY_BIT_EXT: number;
    static VK_HOST_IMAGE_COPY_MEMCPY_EXT: number;
    static VK_IMAGE_USAGE_HOST_TRANSFER_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_IMAGE_TO_IMAGE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_IMAGE_TO_MEMORY_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_MEMORY_TO_IMAGE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_HOST_IMAGE_COPY_DEVICE_PERFORMANCE_QUERY_EXT: number;
    static VK_STRUCTURE_TYPE_HOST_IMAGE_LAYOUT_TRANSITION_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_TO_MEMORY_COPY_EXT: number;
    static VK_STRUCTURE_TYPE_MEMORY_TO_IMAGE_COPY_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_HOST_IMAGE_COPY_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_HOST_IMAGE_COPY_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_SUBRESOURCE_HOST_MEMCPY_SIZE_EXT: number;
    static nvkCopyImageToImageEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkCopyImageToMemoryEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkCopyMemoryToImageEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetImageSubresourceLayout2EXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkTransitionImageLayoutEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCopyImageToImageEXT(paramarg0: VkDevice, paramarg1: VkCopyImageToImageInfo): number;
    static vkCopyImageToMemoryEXT(paramarg0: VkDevice, paramarg1: VkCopyImageToMemoryInfo): number;
    static vkCopyMemoryToImageEXT(paramarg0: VkDevice, paramarg1: VkCopyMemoryToImageInfo): number;
    static vkGetImageSubresourceLayout2EXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkImageSubresource2, paramarg3: VkSubresourceLayout2): void;
    static vkTransitionImageLayoutEXT(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    constructor()
}