import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkComputeOccupancyPriorityParametersNV } from '../../../org/lwjgl/vulkan/VkComputeOccupancyPriorityParametersNV.d.ts'
export class NVComputeOccupancyPriority extends Object {
    static VK_COMPUTE_OCCUPANCY_PRIORITY_HIGH_NV: number;
    static VK_COMPUTE_OCCUPANCY_PRIORITY_LOW_NV: number;
    static VK_COMPUTE_OCCUPANCY_PRIORITY_NORMAL_NV: number;
    static VK_NV_COMPUTE_OCCUPANCY_PRIORITY_EXTENSION_NAME: string;
    static VK_NV_COMPUTE_OCCUPANCY_PRIORITY_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_COMPUTE_OCCUPANCY_PRIORITY_PARAMETERS_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COMPUTE_OCCUPANCY_PRIORITY_FEATURES_NV: number;
    static nvkCmdSetComputeOccupancyPriorityNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetComputeOccupancyPriorityNV(paramarg0: VkCommandBuffer, paramarg1: VkComputeOccupancyPriorityParametersNV): void;
    constructor()
}