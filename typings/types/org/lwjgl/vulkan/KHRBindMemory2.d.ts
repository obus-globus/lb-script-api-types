import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRBindMemory2 extends Object {
    static VK_IMAGE_CREATE_ALIAS_BIT_KHR: number;
    static VK_KHR_BIND_MEMORY_2_EXTENSION_NAME: string;
    static VK_KHR_BIND_MEMORY_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_BIND_BUFFER_MEMORY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_IMAGE_MEMORY_INFO_KHR: number;
    static nvkBindBufferMemory2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkBindImageMemory2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkBindBufferMemory2KHR(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    static vkBindImageMemory2KHR(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    constructor()
}