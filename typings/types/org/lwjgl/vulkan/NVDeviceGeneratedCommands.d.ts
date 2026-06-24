import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkGeneratedCommandsInfoNV } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsInfoNV.d.ts'
import type { VkGeneratedCommandsMemoryRequirementsInfoNV } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsMemoryRequirementsInfoNV.d.ts'
import type { VkIndirectCommandsLayoutCreateInfoNV } from '../../../org/lwjgl/vulkan/VkIndirectCommandsLayoutCreateInfoNV.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
export class NVDeviceGeneratedCommands extends Object {
    static VK_ACCESS_COMMAND_PREPROCESS_READ_BIT_NV: number;
    static VK_ACCESS_COMMAND_PREPROCESS_WRITE_BIT_NV: number;
    static VK_INDIRECT_COMMANDS_LAYOUT_USAGE_EXPLICIT_PREPROCESS_BIT_NV: number;
    static VK_INDIRECT_COMMANDS_LAYOUT_USAGE_INDEXED_SEQUENCES_BIT_NV: number;
    static VK_INDIRECT_COMMANDS_LAYOUT_USAGE_UNORDERED_SEQUENCES_BIT_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_INDEXED_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_TASKS_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_INDEX_BUFFER_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PUSH_CONSTANT_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_SHADER_GROUP_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_STATE_FLAGS_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_VERTEX_BUFFER_NV: number;
    static VK_INDIRECT_STATE_FLAG_FRONTFACE_BIT_NV: number;
    static VK_NV_DEVICE_GENERATED_COMMANDS_EXTENSION_NAME: string;
    static VK_NV_DEVICE_GENERATED_COMMANDS_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_INDIRECT_COMMANDS_LAYOUT_NV: number;
    static VK_PIPELINE_CREATE_INDIRECT_BINDABLE_BIT_NV: number;
    static VK_PIPELINE_STAGE_COMMAND_PREPROCESS_BIT_NV: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_INFO_NV: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_MEMORY_REQUIREMENTS_INFO_NV: number;
    static VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_SHADER_GROUPS_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_GRAPHICS_SHADER_GROUP_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_INDIRECT_COMMANDS_LAYOUT_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_INDIRECT_COMMANDS_LAYOUT_TOKEN_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_PROPERTIES_NV: number;
    static nvkCmdExecuteGeneratedCommandsNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdPreprocessGeneratedCommandsNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateIndirectCommandsLayoutNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyIndirectCommandsLayoutNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetGeneratedCommandsMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdBindPipelineShaderGroupNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdExecuteGeneratedCommandsNV(paramarg0: VkCommandBuffer, paramarg1: boolean, paramarg2: VkGeneratedCommandsInfoNV): void;
    static vkCmdPreprocessGeneratedCommandsNV(paramarg0: VkCommandBuffer, paramarg1: VkGeneratedCommandsInfoNV): void;
    static vkCreateIndirectCommandsLayoutNV(paramarg0: VkDevice, paramarg1: VkIndirectCommandsLayoutCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateIndirectCommandsLayoutNV(paramarg0: VkDevice, paramarg1: VkIndirectCommandsLayoutCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyIndirectCommandsLayoutNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetGeneratedCommandsMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: VkGeneratedCommandsMemoryRequirementsInfoNV, paramarg2: VkMemoryRequirements2): void;
    constructor()
}