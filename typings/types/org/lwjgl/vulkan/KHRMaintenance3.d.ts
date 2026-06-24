import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDescriptorSetLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutCreateInfo.d.ts'
import type { VkDescriptorSetLayoutSupport } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutSupport.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRMaintenance3 extends Object {
    static VK_KHR_MAINTENANCE3_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE3_SPEC_VERSION: number;
    static VK_KHR_MAINTENANCE_3_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_3_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_SUPPORT_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_3_PROPERTIES_KHR: number;
    static nvkGetDescriptorSetLayoutSupportKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkGetDescriptorSetLayoutSupportKHR(paramarg0: VkDevice, paramarg1: VkDescriptorSetLayoutCreateInfo, paramarg2: VkDescriptorSetLayoutSupport): void;
    constructor()
}