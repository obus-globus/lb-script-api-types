import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkComputePipelineCreateInfo } from '../../../org/lwjgl/vulkan/VkComputePipelineCreateInfo.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
import type { VkPipelineIndirectDeviceAddressInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineIndirectDeviceAddressInfoNV.d.ts'
export class NVDeviceGeneratedCommandsCompute extends Object {
    static VK_DESCRIPTOR_SET_LAYOUT_CREATE_INDIRECT_BINDABLE_BIT_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DISPATCH_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PIPELINE_NV: number;
    static VK_NV_DEVICE_GENERATED_COMMANDS_COMPUTE_EXTENSION_NAME: string;
    static VK_NV_DEVICE_GENERATED_COMMANDS_COMPUTE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_INDIRECT_BUFFER_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_COMPUTE_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_INDIRECT_DEVICE_ADDRESS_INFO_NV: number;
    static nvkGetPipelineIndirectDeviceAddressNV(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetPipelineIndirectMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdUpdatePipelineIndirectBufferNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkGetPipelineIndirectDeviceAddressNV(paramarg0: VkDevice, paramarg1: VkPipelineIndirectDeviceAddressInfoNV): number;
    static vkGetPipelineIndirectMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: VkComputePipelineCreateInfo, paramarg2: VkMemoryRequirements2): void;
    constructor()
}