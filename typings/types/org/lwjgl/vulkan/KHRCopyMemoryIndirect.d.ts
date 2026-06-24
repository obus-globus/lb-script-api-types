import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCopyMemoryIndirectInfoKHR } from '../../../org/lwjgl/vulkan/VkCopyMemoryIndirectInfoKHR.d.ts'
import type { VkCopyMemoryToImageIndirectInfoKHR } from '../../../org/lwjgl/vulkan/VkCopyMemoryToImageIndirectInfoKHR.d.ts'
export class KHRCopyMemoryIndirect extends Object {
    static VK_ADDRESS_COPY_DEVICE_LOCAL_BIT_KHR: number;
    static VK_ADDRESS_COPY_PROTECTED_BIT_KHR: number;
    static VK_ADDRESS_COPY_SPARSE_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_COPY_IMAGE_INDIRECT_DST_BIT_KHR: number;
    static VK_KHR_COPY_MEMORY_INDIRECT_EXTENSION_NAME: string;
    static VK_KHR_COPY_MEMORY_INDIRECT_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_COPY_INDIRECT_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_MEMORY_INDIRECT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_MEMORY_TO_IMAGE_INDIRECT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COPY_MEMORY_INDIRECT_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COPY_MEMORY_INDIRECT_PROPERTIES_KHR: number;
    static nvkCmdCopyMemoryIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyMemoryToImageIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdCopyMemoryIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyMemoryIndirectInfoKHR): void;
    static vkCmdCopyMemoryToImageIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyMemoryToImageIndirectInfoKHR): void;
    constructor()
}