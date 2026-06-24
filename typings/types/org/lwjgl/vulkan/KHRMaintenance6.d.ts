import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBindDescriptorBufferEmbeddedSamplersInfoEXT } from '../../../org/lwjgl/vulkan/VkBindDescriptorBufferEmbeddedSamplersInfoEXT.d.ts'
import type { VkBindDescriptorSetsInfo } from '../../../org/lwjgl/vulkan/VkBindDescriptorSetsInfo.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkPushConstantsInfo } from '../../../org/lwjgl/vulkan/VkPushConstantsInfo.d.ts'
import type { VkPushDescriptorSetInfo } from '../../../org/lwjgl/vulkan/VkPushDescriptorSetInfo.d.ts'
import type { VkPushDescriptorSetWithTemplateInfo } from '../../../org/lwjgl/vulkan/VkPushDescriptorSetWithTemplateInfo.d.ts'
import type { VkSetDescriptorBufferOffsetsInfoEXT } from '../../../org/lwjgl/vulkan/VkSetDescriptorBufferOffsetsInfoEXT.d.ts'
export class KHRMaintenance6 extends Object {
    static VK_KHR_MAINTENANCE_6_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_6_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_BIND_DESCRIPTOR_BUFFER_EMBEDDED_SAMPLERS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_BIND_DESCRIPTOR_SETS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_MEMORY_STATUS_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_6_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_6_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PUSH_CONSTANTS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PUSH_DESCRIPTOR_SET_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PUSH_DESCRIPTOR_SET_WITH_TEMPLATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SET_DESCRIPTOR_BUFFER_OFFSETS_INFO_EXT: number;
    static nvkCmdBindDescriptorBufferEmbeddedSamplers2EXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdBindDescriptorSets2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdPushConstants2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdPushDescriptorSet2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdPushDescriptorSetWithTemplate2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdSetDescriptorBufferOffsets2EXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBindDescriptorBufferEmbeddedSamplers2EXT(paramarg0: VkCommandBuffer, paramarg1: VkBindDescriptorBufferEmbeddedSamplersInfoEXT): void;
    static vkCmdBindDescriptorSets2KHR(paramarg0: VkCommandBuffer, paramarg1: VkBindDescriptorSetsInfo): void;
    static vkCmdPushConstants2KHR(paramarg0: VkCommandBuffer, paramarg1: VkPushConstantsInfo): void;
    static vkCmdPushDescriptorSet2KHR(paramarg0: VkCommandBuffer, paramarg1: VkPushDescriptorSetInfo): void;
    static vkCmdPushDescriptorSetWithTemplate2KHR(paramarg0: VkCommandBuffer, paramarg1: VkPushDescriptorSetWithTemplateInfo): void;
    static vkCmdSetDescriptorBufferOffsets2EXT(paramarg0: VkCommandBuffer, paramarg1: VkSetDescriptorBufferOffsetsInfoEXT): void;
    constructor()
}