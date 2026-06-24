import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDispatchGraphCountInfoAMDX } from '../../../org/lwjgl/vulkan/VkDispatchGraphCountInfoAMDX.d.ts'
import type { VkExecutionGraphPipelineScratchSizeAMDX } from '../../../org/lwjgl/vulkan/VkExecutionGraphPipelineScratchSizeAMDX.d.ts'
import type { VkPipelineShaderStageNodeCreateInfoAMDX } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageNodeCreateInfoAMDX.d.ts'
export class AMDXShaderEnqueue extends Object {
    static VK_AMDX_SHADER_ENQUEUE_EXTENSION_NAME: string;
    static VK_AMDX_SHADER_ENQUEUE_SPEC_VERSION: number;
    static VK_BUFFER_USAGE_2_EXECUTION_GRAPH_SCRATCH_BIT_AMDX: number;
    static VK_BUFFER_USAGE_EXECUTION_GRAPH_SCRATCH_BIT_AMDX: number;
    static VK_PIPELINE_BIND_POINT_EXECUTION_GRAPH_AMDX: number;
    static VK_PIPELINE_CREATE_2_EXECUTION_GRAPH_BIT_AMDX: number;
    static VK_SHADER_INDEX_UNUSED_AMDX: number;
    static VK_STRUCTURE_TYPE_EXECUTION_GRAPH_PIPELINE_CREATE_INFO_AMDX: number;
    static VK_STRUCTURE_TYPE_EXECUTION_GRAPH_PIPELINE_SCRATCH_SIZE_AMDX: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_ENQUEUE_FEATURES_AMDX: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_ENQUEUE_PROPERTIES_AMDX: number;
    static VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_NODE_CREATE_INFO_AMDX: number;
    static nvkCmdDispatchGraphAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdDispatchGraphIndirectAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCreateExecutionGraphPipelinesAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvkGetExecutionGraphPipelineNodeIndexAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetExecutionGraphPipelineScratchSizeAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdDispatchGraphAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: VkDispatchGraphCountInfoAMDX): void;
    static vkCmdDispatchGraphIndirectAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: VkDispatchGraphCountInfoAMDX): void;
    static vkCmdDispatchGraphIndirectCountAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdInitializeGraphScratchMemoryAMDX(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCreateExecutionGraphPipelinesAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[], paramarg3: VkAllocationCallbacks, paramarg4: LongBuffer): number;
    static vkCreateExecutionGraphPipelinesAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[], paramarg3: VkAllocationCallbacks, paramarg4: number[]): number;
    static vkGetExecutionGraphPipelineNodeIndexAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkPipelineShaderStageNodeCreateInfoAMDX, paramarg3: number[]): number;
    static vkGetExecutionGraphPipelineNodeIndexAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkPipelineShaderStageNodeCreateInfoAMDX, paramarg3: IntBuffer): number;
    static vkGetExecutionGraphPipelineScratchSizeAMDX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkExecutionGraphPipelineScratchSizeAMDX): number;
    constructor()
}