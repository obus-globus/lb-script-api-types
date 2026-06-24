import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryFdPropertiesKHR } from '../../../org/lwjgl/vulkan/VkMemoryFdPropertiesKHR.d.ts'
import type { VkMemoryGetFdInfoKHR } from '../../../org/lwjgl/vulkan/VkMemoryGetFdInfoKHR.d.ts'
export class KHRExternalMemoryFd extends Object {
    static VK_KHR_EXTERNAL_MEMORY_FD_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_MEMORY_FD_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_IMPORT_MEMORY_FD_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_FD_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_GET_FD_INFO_KHR: number;
    static nvkGetMemoryFdKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetMemoryFdPropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetMemoryFdKHR(paramarg0: VkDevice, paramarg1: VkMemoryGetFdInfoKHR, paramarg2: number[]): number;
    static vkGetMemoryFdKHR(paramarg0: VkDevice, paramarg1: VkMemoryGetFdInfoKHR, paramarg2: IntBuffer): number;
    static vkGetMemoryFdPropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: VkMemoryFdPropertiesKHR): number;
    constructor()
}