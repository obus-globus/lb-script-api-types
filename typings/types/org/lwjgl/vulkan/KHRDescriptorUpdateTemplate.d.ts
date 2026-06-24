import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDescriptorUpdateTemplateCreateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorUpdateTemplateCreateInfo.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRDescriptorUpdateTemplate extends Object {
    static VK_DEBUG_REPORT_OBJECT_TYPE_DESCRIPTOR_UPDATE_TEMPLATE_KHR_EXT: number;
    static VK_DESCRIPTOR_UPDATE_TEMPLATE_TYPE_DESCRIPTOR_SET_KHR: number;
    static VK_DESCRIPTOR_UPDATE_TEMPLATE_TYPE_PUSH_DESCRIPTORS_KHR: number;
    static VK_KHR_DESCRIPTOR_UPDATE_TEMPLATE_EXTENSION_NAME: string;
    static VK_KHR_DESCRIPTOR_UPDATE_TEMPLATE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_DESCRIPTOR_UPDATE_TEMPLATE_KHR: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_UPDATE_TEMPLATE_CREATE_INFO_KHR: number;
    static nvkCreateDescriptorUpdateTemplateKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyDescriptorUpdateTemplateKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdPushDescriptorSetWithTemplateKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCreateDescriptorUpdateTemplateKHR(paramarg0: VkDevice, paramarg1: VkDescriptorUpdateTemplateCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDescriptorUpdateTemplateKHR(paramarg0: VkDevice, paramarg1: VkDescriptorUpdateTemplateCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyDescriptorUpdateTemplateKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkUpdateDescriptorSetWithTemplateKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}