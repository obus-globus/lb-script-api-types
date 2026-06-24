import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryMapInfo } from '../../../org/lwjgl/vulkan/VkMemoryMapInfo.d.ts'
import type { VkMemoryUnmapInfo } from '../../../org/lwjgl/vulkan/VkMemoryUnmapInfo.d.ts'
export class KHRMapMemory2 extends Object {
    static VK_KHR_MAP_MEMORY_2_EXTENSION_NAME: string;
    static VK_KHR_MAP_MEMORY_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_MEMORY_MAP_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_UNMAP_INFO_KHR: number;
    static nvkMapMemory2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkUnmapMemory2KHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkMapMemory2KHR(paramarg0: VkDevice, paramarg1: VkMemoryMapInfo, paramarg2: PointerBuffer): number;
    static vkUnmapMemory2KHR(paramarg0: VkDevice, paramarg1: VkMemoryUnmapInfo): number;
    constructor()
}