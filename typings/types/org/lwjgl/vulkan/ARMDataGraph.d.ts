import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDataGraphPipelineDispatchInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineDispatchInfoARM.d.ts'
import type { VkDataGraphPipelineInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineInfoARM.d.ts'
import type { VkDataGraphPipelineSessionBindPointRequirementsInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineSessionBindPointRequirementsInfoARM.d.ts'
import type { VkDataGraphPipelineSessionCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineSessionCreateInfoARM.d.ts'
import type { VkDataGraphPipelineSessionMemoryRequirementsInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineSessionMemoryRequirementsInfoARM.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceQueueFamilyDataGraphProcessingEngineInfoARM } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceQueueFamilyDataGraphProcessingEngineInfoARM.d.ts'
import type { VkQueueFamilyDataGraphProcessingEnginePropertiesARM } from '../../../org/lwjgl/vulkan/VkQueueFamilyDataGraphProcessingEnginePropertiesARM.d.ts'
export class ARMDataGraph extends Object {
    static VK_ACCESS_2_DATA_GRAPH_READ_BIT_ARM: number;
    static VK_ACCESS_2_DATA_GRAPH_WRITE_BIT_ARM: number;
    static VK_ARM_DATA_GRAPH_EXTENSION_NAME: string;
    static VK_ARM_DATA_GRAPH_SPEC_VERSION: number;
    static VK_BUFFER_USAGE_2_DATA_GRAPH_FOREIGN_DESCRIPTOR_BIT_ARM: number;
    static VK_DATA_GRAPH_PIPELINE_PROPERTY_CREATION_LOG_ARM: number;
    static VK_DATA_GRAPH_PIPELINE_PROPERTY_IDENTIFIER_ARM: number;
    static VK_DATA_GRAPH_PIPELINE_SESSION_BIND_POINT_TRANSIENT_ARM: number;
    static VK_DATA_GRAPH_PIPELINE_SESSION_BIND_POINT_TYPE_MEMORY_ARM: number;
    static VK_DATA_GRAPH_PIPELINE_SESSION_CREATE_PROTECTED_BIT_ARM: number;
    static VK_FORMAT_FEATURE_2_TENSOR_DATA_GRAPH_BIT_ARM: number;
    static VK_MAX_PHYSICAL_DEVICE_DATA_GRAPH_OPERATION_SET_NAME_SIZE_ARM: number;
    static VK_OBJECT_TYPE_DATA_GRAPH_PIPELINE_SESSION_ARM: number;
    static VK_PHYSICAL_DEVICE_DATA_GRAPH_OPERATION_TYPE_SPIRV_EXTENDED_INSTRUCTION_SET_ARM: number;
    static VK_PHYSICAL_DEVICE_DATA_GRAPH_PROCESSING_ENGINE_TYPE_DEFAULT_ARM: number;
    static VK_PIPELINE_BIND_POINT_DATA_GRAPH_ARM: number;
    static VK_PIPELINE_STAGE_2_DATA_GRAPH_BIT_ARM: number;
    static VK_QUEUE_DATA_GRAPH_BIT_ARM: number;
    static VK_STRUCTURE_TYPE_BIND_DATA_GRAPH_PIPELINE_SESSION_MEMORY_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_COMPILER_CONTROL_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_CONSTANT_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_CONSTANT_TENSOR_SEMI_STRUCTURED_SPARSITY_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_DISPATCH_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_IDENTIFIER_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_PROPERTY_QUERY_RESULT_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_RESOURCE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_SESSION_BIND_POINT_REQUIREMENTS_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_SESSION_BIND_POINT_REQUIREMENT_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_SESSION_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_SESSION_MEMORY_REQUIREMENTS_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PIPELINE_SHADER_MODULE_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DATA_GRAPH_PROCESSING_ENGINE_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DATA_GRAPH_FEATURES_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_QUEUE_FAMILY_DATA_GRAPH_PROCESSING_ENGINE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_DATA_GRAPH_PROCESSING_ENGINE_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_DATA_GRAPH_PROPERTIES_ARM: number;
    static VK_TENSOR_USAGE_DATA_GRAPH_BIT_ARM: number;
    static nvkBindDataGraphPipelineSessionMemoryARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCmdDispatchDataGraphARM(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCreateDataGraphPipelineSessionARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateDataGraphPipelinesARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nvkDestroyDataGraphPipelineSessionARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDataGraphPipelineAvailablePropertiesARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDataGraphPipelinePropertiesARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDataGraphPipelineSessionBindPointRequirementsARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDataGraphPipelineSessionMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceQueueFamilyDataGraphProcessingEnginePropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceQueueFamilyDataGraphPropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkBindDataGraphPipelineSessionMemoryARM(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    static vkCmdDispatchDataGraphARM(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: VkDataGraphPipelineDispatchInfoARM): void;
    static vkCreateDataGraphPipelineSessionARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineSessionCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDataGraphPipelineSessionARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineSessionCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateDataGraphPipelinesARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[], paramarg4: VkAllocationCallbacks, paramarg5: LongBuffer): number;
    static vkCreateDataGraphPipelinesARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[], paramarg4: VkAllocationCallbacks, paramarg5: number[]): number;
    static vkDestroyDataGraphPipelineSessionARM(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetDataGraphPipelineAvailablePropertiesARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineInfoARM, paramarg2: number[], paramarg3: number[]): number;
    static vkGetDataGraphPipelineAvailablePropertiesARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineInfoARM, paramarg2: IntBuffer, paramarg3: IntBuffer): number;
    static vkGetDataGraphPipelinePropertiesARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineInfoARM, paramarg2: (Object | null)[]): number;
    static vkGetDataGraphPipelineSessionBindPointRequirementsARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineSessionBindPointRequirementsInfoARM, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetDataGraphPipelineSessionBindPointRequirementsARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineSessionBindPointRequirementsInfoARM, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetDataGraphPipelineSessionMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: VkDataGraphPipelineSessionMemoryRequirementsInfoARM, paramarg2: VkMemoryRequirements2): void;
    static vkGetPhysicalDeviceQueueFamilyDataGraphProcessingEnginePropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceQueueFamilyDataGraphProcessingEngineInfoARM, paramarg2: VkQueueFamilyDataGraphProcessingEnginePropertiesARM): void;
    static vkGetPhysicalDeviceQueueFamilyDataGraphPropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceQueueFamilyDataGraphPropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}