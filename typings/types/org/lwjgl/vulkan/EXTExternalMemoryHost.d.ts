import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryHostPointerPropertiesEXT } from '../../../org/lwjgl/vulkan/VkMemoryHostPointerPropertiesEXT.d.ts'
export class EXTExternalMemoryHost extends Object {
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_HOST_ALLOCATION_BIT_EXT: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_HOST_MAPPED_FOREIGN_MEMORY_BIT_EXT: number;
    static VK_EXT_EXTERNAL_MEMORY_HOST_EXTENSION_NAME: string;
    static VK_EXT_EXTERNAL_MEMORY_HOST_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_IMPORT_MEMORY_HOST_POINTER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MEMORY_HOST_POINTER_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_MEMORY_HOST_PROPERTIES_EXT: number;
    static nvkGetMemoryHostPointerPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetMemoryHostPointerPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: VkMemoryHostPointerPropertiesEXT): number;
    constructor()
}