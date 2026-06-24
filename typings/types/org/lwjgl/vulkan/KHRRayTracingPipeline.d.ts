import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkStridedDeviceAddressRegionKHR } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressRegionKHR.d.ts'
export class KHRRayTracingPipeline extends Object {
    static VK_BUFFER_USAGE_SHADER_BINDING_TABLE_BIT_KHR: number;
    static VK_DYNAMIC_STATE_RAY_TRACING_PIPELINE_STACK_SIZE_KHR: number;
    static VK_KHR_RAY_TRACING_PIPELINE_EXTENSION_NAME: string;
    static VK_KHR_RAY_TRACING_PIPELINE_SPEC_VERSION: number;
    static VK_PIPELINE_BIND_POINT_RAY_TRACING_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_SKIP_BUILT_IN_PRIMITIVES_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_NO_NULL_ANY_HIT_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_NO_NULL_CLOSEST_HIT_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_NO_NULL_INTERSECTION_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_NO_NULL_MISS_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_SHADER_GROUP_HANDLE_CAPTURE_REPLAY_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_SKIP_AABBS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_SKIP_TRIANGLES_BIT_KHR: number;
    static VK_PIPELINE_STAGE_RAY_TRACING_SHADER_BIT_KHR: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_GENERAL_KHR: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_PROCEDURAL_HIT_GROUP_KHR: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_TRIANGLES_HIT_GROUP_KHR: number;
    static VK_SHADER_GROUP_SHADER_ANY_HIT_KHR: number;
    static VK_SHADER_GROUP_SHADER_CLOSEST_HIT_KHR: number;
    static VK_SHADER_GROUP_SHADER_GENERAL_KHR: number;
    static VK_SHADER_GROUP_SHADER_INTERSECTION_KHR: number;
    static VK_SHADER_STAGE_ANY_HIT_BIT_KHR: number;
    static VK_SHADER_STAGE_CALLABLE_BIT_KHR: number;
    static VK_SHADER_STAGE_CLOSEST_HIT_BIT_KHR: number;
    static VK_SHADER_STAGE_INTERSECTION_BIT_KHR: number;
    static VK_SHADER_STAGE_MISS_BIT_KHR: number;
    static VK_SHADER_STAGE_RAYGEN_BIT_KHR: number;
    static VK_SHADER_UNUSED_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_RAY_TRACING_PIPELINE_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_RAY_TRACING_PIPELINE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_RAY_TRACING_PIPELINE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RAY_TRACING_PIPELINE_INTERFACE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RAY_TRACING_SHADER_GROUP_CREATE_INFO_KHR: number;
    static nvkCmdTraceRaysIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCmdTraceRaysKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static nvkCreateRayTracingPipelinesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nvkGetRayTracingCaptureReplayShaderGroupHandlesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvkGetRayTracingShaderGroupHandlesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static vkCmdSetRayTracingPipelineStackSizeKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdTraceRaysIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: VkStridedDeviceAddressRegionKHR, paramarg2: VkStridedDeviceAddressRegionKHR, paramarg3: VkStridedDeviceAddressRegionKHR, paramarg4: VkStridedDeviceAddressRegionKHR, paramarg5: number): void;
    static vkCmdTraceRaysKHR(paramarg0: VkCommandBuffer, paramarg1: VkStridedDeviceAddressRegionKHR, paramarg2: VkStridedDeviceAddressRegionKHR, paramarg3: VkStridedDeviceAddressRegionKHR, paramarg4: VkStridedDeviceAddressRegionKHR, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static vkCreateRayTracingPipelinesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[], paramarg4: VkAllocationCallbacks, paramarg5: LongBuffer): number;
    static vkCreateRayTracingPipelinesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[], paramarg4: VkAllocationCallbacks, paramarg5: number[]): number;
    static vkGetRayTracingCaptureReplayShaderGroupHandlesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): number;
    static vkGetRayTracingShaderGroupHandlesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): number;
    static vkGetRayTracingShaderGroupStackSizeKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}