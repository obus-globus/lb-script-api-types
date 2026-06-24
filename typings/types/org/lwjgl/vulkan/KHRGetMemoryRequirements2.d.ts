import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBufferMemoryRequirementsInfo2 } from '../../../org/lwjgl/vulkan/VkBufferMemoryRequirementsInfo2.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageMemoryRequirementsInfo2 } from '../../../org/lwjgl/vulkan/VkImageMemoryRequirementsInfo2.d.ts'
import type { VkImageSparseMemoryRequirementsInfo2 } from '../../../org/lwjgl/vulkan/VkImageSparseMemoryRequirementsInfo2.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
export class KHRGetMemoryRequirements2 extends Object {
    static VK_KHR_GET_MEMORY_REQUIREMENTS_2_EXTENSION_NAME: string;
    static VK_KHR_GET_MEMORY_REQUIREMENTS_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_BUFFER_MEMORY_REQUIREMENTS_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_MEMORY_REQUIREMENTS_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_SPARSE_MEMORY_REQUIREMENTS_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_REQUIREMENTS_2_KHR: number;
    static VK_STRUCTURE_TYPE_SPARSE_IMAGE_MEMORY_REQUIREMENTS_2_KHR: number;
    static nvkGetBufferMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetImageMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetImageSparseMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkGetBufferMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: VkBufferMemoryRequirementsInfo2, paramarg2: VkMemoryRequirements2): void;
    static vkGetImageMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: VkImageMemoryRequirementsInfo2, paramarg2: VkMemoryRequirements2): void;
    static vkGetImageSparseMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: VkImageSparseMemoryRequirementsInfo2, paramarg2: number[], paramarg3: (Object | null)[]): void;
    static vkGetImageSparseMemoryRequirements2KHR(paramarg0: VkDevice, paramarg1: VkImageSparseMemoryRequirementsInfo2, paramarg2: IntBuffer, paramarg3: (Object | null)[]): void;
    constructor()
}