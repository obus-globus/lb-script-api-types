import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class HUAWEIClusterCullingShader extends Object {
    static VK_HUAWEI_CLUSTER_CULLING_SHADER_EXTENSION_NAME: string;
    static VK_HUAWEI_CLUSTER_CULLING_SHADER_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_CLUSTER_CULLING_SHADER_BIT_HUAWEI: number;
    static VK_QUERY_PIPELINE_STATISTIC_CLUSTER_CULLING_SHADER_INVOCATIONS_BIT_HUAWEI: number;
    static VK_SHADER_STAGE_CLUSTER_CULLING_BIT_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CLUSTER_CULLING_SHADER_FEATURES_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CLUSTER_CULLING_SHADER_PROPERTIES_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CLUSTER_CULLING_SHADER_VRS_FEATURES_HUAWEI: number;
    static vkCmdDrawClusterHUAWEI(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdDrawClusterIndirectHUAWEI(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    constructor()
}