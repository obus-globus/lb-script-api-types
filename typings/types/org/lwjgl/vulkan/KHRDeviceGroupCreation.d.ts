import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class KHRDeviceGroupCreation extends Object {
    static VK_KHR_DEVICE_GROUP_CREATION_EXTENSION_NAME: string;
    static VK_KHR_DEVICE_GROUP_CREATION_SPEC_VERSION: number;
    static VK_MAX_DEVICE_GROUP_SIZE_KHR: number;
    static VK_MEMORY_HEAP_MULTI_INSTANCE_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_DEVICE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_GROUP_PROPERTIES_KHR: number;
    static nvkEnumeratePhysicalDeviceGroupsKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number): number;
    static vkEnumeratePhysicalDeviceGroupsKHR(paramarg0: VkInstance, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkEnumeratePhysicalDeviceGroupsKHR(paramarg0: VkInstance, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}