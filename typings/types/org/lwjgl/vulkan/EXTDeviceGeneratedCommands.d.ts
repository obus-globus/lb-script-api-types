import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkGeneratedCommandsInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsInfoEXT.d.ts'
import type { VkGeneratedCommandsMemoryRequirementsInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsMemoryRequirementsInfoEXT.d.ts'
import type { VkIndirectCommandsLayoutCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkIndirectCommandsLayoutCreateInfoEXT.d.ts'
import type { VkIndirectExecutionSetCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkIndirectExecutionSetCreateInfoEXT.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
export class EXTDeviceGeneratedCommands extends Object {
    static VK_ACCESS_COMMAND_PREPROCESS_READ_BIT_EXT: number;
    static VK_ACCESS_COMMAND_PREPROCESS_WRITE_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_PREPROCESS_BUFFER_BIT_EXT: number;
    static VK_EXT_DEVICE_GENERATED_COMMANDS_EXTENSION_NAME: string;
    static VK_EXT_DEVICE_GENERATED_COMMANDS_SPEC_VERSION: number;
    static VK_INDIRECT_COMMANDS_INPUT_MODE_DXGI_INDEX_BUFFER_EXT: number;
    static VK_INDIRECT_COMMANDS_INPUT_MODE_VULKAN_INDEX_BUFFER_EXT: number;
    static VK_INDIRECT_COMMANDS_LAYOUT_USAGE_EXPLICIT_PREPROCESS_BIT_EXT: number;
    static VK_INDIRECT_COMMANDS_LAYOUT_USAGE_UNORDERED_SEQUENCES_BIT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DISPATCH_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_COUNT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_INDEXED_COUNT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_INDEXED_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_EXECUTION_SET_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_INDEX_BUFFER_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PUSH_CONSTANT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_SEQUENCE_INDEX_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_VERTEX_BUFFER_EXT: number;
    static VK_INDIRECT_EXECUTION_SET_INFO_TYPE_PIPELINES_EXT: number;
    static VK_INDIRECT_EXECUTION_SET_INFO_TYPE_SHADER_OBJECTS_EXT: number;
    static VK_OBJECT_TYPE_INDIRECT_COMMANDS_LAYOUT_EXT: number;
    static VK_OBJECT_TYPE_INDIRECT_EXECUTION_SET_EXT: number;
    static VK_PIPELINE_CREATE_2_INDIRECT_BINDABLE_BIT_EXT: number;
    static VK_PIPELINE_STAGE_COMMAND_PREPROCESS_BIT_EXT: number;
    static VK_SHADER_CREATE_INDIRECT_BINDABLE_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_MEMORY_REQUIREMENTS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_PIPELINE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_GENERATED_COMMANDS_SHADER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_COMMANDS_LAYOUT_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_COMMANDS_LAYOUT_TOKEN_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_EXECUTION_SET_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_EXECUTION_SET_PIPELINE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_EXECUTION_SET_SHADER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_EXECUTION_SET_SHADER_LAYOUT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_WRITE_INDIRECT_EXECUTION_SET_PIPELINE_EXT: number;
    static VK_STRUCTURE_TYPE_WRITE_INDIRECT_EXECUTION_SET_SHADER_EXT: number;
    static nvkCmdExecuteGeneratedCommandsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdPreprocessGeneratedCommandsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: VkCommandBuffer): void;
    static nvkCreateIndirectCommandsLayoutEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateIndirectExecutionSetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyIndirectCommandsLayoutEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkDestroyIndirectExecutionSetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetGeneratedCommandsMemoryRequirementsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkUpdateIndirectExecutionSetPipelineEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkUpdateIndirectExecutionSetShaderEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdExecuteGeneratedCommandsEXT(paramarg0: VkCommandBuffer, paramarg1: boolean, paramarg2: VkGeneratedCommandsInfoEXT): void;
    static vkCmdPreprocessGeneratedCommandsEXT(paramarg0: VkCommandBuffer, paramarg1: VkGeneratedCommandsInfoEXT, paramarg2: VkCommandBuffer): void;
    static vkCreateIndirectCommandsLayoutEXT(paramarg0: VkDevice, paramarg1: VkIndirectCommandsLayoutCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateIndirectCommandsLayoutEXT(paramarg0: VkDevice, paramarg1: VkIndirectCommandsLayoutCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateIndirectExecutionSetEXT(paramarg0: VkDevice, paramarg1: VkIndirectExecutionSetCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateIndirectExecutionSetEXT(paramarg0: VkDevice, paramarg1: VkIndirectExecutionSetCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyIndirectCommandsLayoutEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkDestroyIndirectExecutionSetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetGeneratedCommandsMemoryRequirementsEXT(paramarg0: VkDevice, paramarg1: VkGeneratedCommandsMemoryRequirementsInfoEXT, paramarg2: VkMemoryRequirements2): void;
    static vkUpdateIndirectExecutionSetPipelineEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkUpdateIndirectExecutionSetShaderEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[]): void;
    constructor()
}