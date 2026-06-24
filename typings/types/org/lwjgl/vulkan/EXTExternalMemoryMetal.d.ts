import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryGetMetalHandleInfoEXT } from '../../../org/lwjgl/vulkan/VkMemoryGetMetalHandleInfoEXT.d.ts'
import type { VkMemoryMetalHandlePropertiesEXT } from '../../../org/lwjgl/vulkan/VkMemoryMetalHandlePropertiesEXT.d.ts'
export class EXTExternalMemoryMetal extends Object {
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_MTLBUFFER_BIT_EXT: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_MTLHEAP_BIT_EXT: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_MTLTEXTURE_BIT_EXT: number;
    static VK_EXT_EXTERNAL_MEMORY_METAL_EXTENSION_NAME: string;
    static VK_EXT_EXTERNAL_MEMORY_METAL_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_IMPORT_MEMORY_METAL_HANDLE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MEMORY_GET_METAL_HANDLE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MEMORY_METAL_HANDLE_PROPERTIES_EXT: number;
    static nvkGetMemoryMetalHandleEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetMemoryMetalHandlePropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetMemoryMetalHandleEXT(paramarg0: VkDevice, paramarg1: VkMemoryGetMetalHandleInfoEXT, paramarg2: PointerBuffer): number;
    static vkGetMemoryMetalHandlePropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: VkMemoryMetalHandlePropertiesEXT): number;
    constructor()
}