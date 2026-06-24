import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTPageableDeviceLocalMemory extends Object {
    static VK_EXT_PAGEABLE_DEVICE_LOCAL_MEMORY_EXTENSION_NAME: string;
    static VK_EXT_PAGEABLE_DEVICE_LOCAL_MEMORY_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PAGEABLE_DEVICE_LOCAL_MEMORY_FEATURES_EXT: number;
    static vkSetDeviceMemoryPriorityEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    constructor()
}