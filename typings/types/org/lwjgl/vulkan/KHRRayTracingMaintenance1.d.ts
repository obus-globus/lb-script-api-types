import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class KHRRayTracingMaintenance1 extends Object {
    static VK_ACCESS_2_SHADER_BINDING_TABLE_READ_BIT_KHR: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_TRACE_RAYS2_EXT: number;
    static VK_KHR_RAY_TRACING_MAINTENANCE_1_EXTENSION_NAME: string;
    static VK_KHR_RAY_TRACING_MAINTENANCE_1_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_ACCELERATION_STRUCTURE_COPY_BIT_KHR: number;
    static VK_QUERY_TYPE_ACCELERATION_STRUCTURE_SERIALIZATION_BOTTOM_LEVEL_POINTERS_KHR: number;
    static VK_QUERY_TYPE_ACCELERATION_STRUCTURE_SIZE_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_RAY_TRACING_MAINTENANCE_1_FEATURES_KHR: number;
    static vkCmdTraceRaysIndirect2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    constructor()
}