import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAccelerationStructureCreateInfoNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureCreateInfoNV.d.ts'
import type { VkAccelerationStructureInfoNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureInfoNV.d.ts'
import type { VkAccelerationStructureMemoryRequirementsInfoNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureMemoryRequirementsInfoNV.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryRequirements2KHR } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2KHR.d.ts'
export class NVRayTracing extends Object {
    static VK_ACCELERATION_STRUCTURE_MEMORY_REQUIREMENTS_TYPE_BUILD_SCRATCH_NV: number;
    static VK_ACCELERATION_STRUCTURE_MEMORY_REQUIREMENTS_TYPE_OBJECT_NV: number;
    static VK_ACCELERATION_STRUCTURE_MEMORY_REQUIREMENTS_TYPE_UPDATE_SCRATCH_NV: number;
    static VK_ACCELERATION_STRUCTURE_TYPE_BOTTOM_LEVEL_NV: number;
    static VK_ACCELERATION_STRUCTURE_TYPE_TOP_LEVEL_NV: number;
    static VK_ACCESS_ACCELERATION_STRUCTURE_READ_BIT_NV: number;
    static VK_ACCESS_ACCELERATION_STRUCTURE_WRITE_BIT_NV: number;
    static VK_BUFFER_USAGE_RAY_TRACING_BIT_NV: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_COMPACTION_BIT_NV: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_UPDATE_BIT_NV: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_LOW_MEMORY_BIT_NV: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_PREFER_FAST_BUILD_BIT_NV: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_PREFER_FAST_TRACE_BIT_NV: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_CLONE_NV: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_COMPACT_NV: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_ACCELERATION_STRUCTURE_NV_EXT: number;
    static VK_DESCRIPTOR_TYPE_ACCELERATION_STRUCTURE_NV: number;
    static VK_GEOMETRY_INSTANCE_FORCE_NO_OPAQUE_BIT_NV: number;
    static VK_GEOMETRY_INSTANCE_FORCE_OPAQUE_BIT_NV: number;
    static VK_GEOMETRY_INSTANCE_TRIANGLE_CULL_DISABLE_BIT_NV: number;
    static VK_GEOMETRY_INSTANCE_TRIANGLE_FRONT_COUNTERCLOCKWISE_BIT_NV: number;
    static VK_GEOMETRY_NO_DUPLICATE_ANY_HIT_INVOCATION_BIT_NV: number;
    static VK_GEOMETRY_OPAQUE_BIT_NV: number;
    static VK_GEOMETRY_TYPE_AABBS_NV: number;
    static VK_GEOMETRY_TYPE_TRIANGLES_NV: number;
    static VK_INDEX_TYPE_NONE_NV: number;
    static VK_NV_RAY_TRACING_EXTENSION_NAME: string;
    static VK_NV_RAY_TRACING_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_ACCELERATION_STRUCTURE_NV: number;
    static VK_PIPELINE_BIND_POINT_RAY_TRACING_NV: number;
    static VK_PIPELINE_CREATE_DEFER_COMPILE_BIT_NV: number;
    static VK_PIPELINE_STAGE_ACCELERATION_STRUCTURE_BUILD_BIT_NV: number;
    static VK_PIPELINE_STAGE_RAY_TRACING_SHADER_BIT_NV: number;
    static VK_QUERY_TYPE_ACCELERATION_STRUCTURE_COMPACTED_SIZE_NV: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_GENERAL_NV: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_PROCEDURAL_HIT_GROUP_NV: number;
    static VK_RAY_TRACING_SHADER_GROUP_TYPE_TRIANGLES_HIT_GROUP_NV: number;
    static VK_SHADER_STAGE_ANY_HIT_BIT_NV: number;
    static VK_SHADER_STAGE_CALLABLE_BIT_NV: number;
    static VK_SHADER_STAGE_CLOSEST_HIT_BIT_NV: number;
    static VK_SHADER_STAGE_INTERSECTION_BIT_NV: number;
    static VK_SHADER_STAGE_MISS_BIT_NV: number;
    static VK_SHADER_STAGE_RAYGEN_BIT_NV: number;
    static VK_SHADER_UNUSED_NV: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_MEMORY_REQUIREMENTS_INFO_NV: number;
    static VK_STRUCTURE_TYPE_BIND_ACCELERATION_STRUCTURE_MEMORY_INFO_NV: number;
    static VK_STRUCTURE_TYPE_GEOMETRY_AABB_NV: number;
    static VK_STRUCTURE_TYPE_GEOMETRY_NV: number;
    static VK_STRUCTURE_TYPE_GEOMETRY_TRIANGLES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_RAY_TRACING_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_RAY_TRACING_PIPELINE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_RAY_TRACING_SHADER_GROUP_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET_ACCELERATION_STRUCTURE_NV: number;
    static nvkBindAccelerationStructureMemoryNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCmdBuildAccelerationStructureNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static nvkCmdWriteAccelerationStructuresPropertiesNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCreateAccelerationStructureNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateRayTracingPipelinesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvkDestroyAccelerationStructureNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetAccelerationStructureHandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetAccelerationStructureMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetRayTracingShaderGroupHandlesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static vkBindAccelerationStructureMemoryNV(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    static vkCmdBuildAccelerationStructureNV(paramarg0: VkCommandBuffer, paramarg1: VkAccelerationStructureInfoNV, paramarg2: number, paramarg3: number, paramarg4: boolean, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static vkCmdCopyAccelerationStructureNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdTraceRaysNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number): void;
    static vkCmdWriteAccelerationStructuresPropertiesNV(paramarg0: VkCommandBuffer, paramarg1: LongBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdWriteAccelerationStructuresPropertiesNV(paramarg0: VkCommandBuffer, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCompileDeferredNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCreateAccelerationStructureNV(paramarg0: VkDevice, paramarg1: VkAccelerationStructureCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateAccelerationStructureNV(paramarg0: VkDevice, paramarg1: VkAccelerationStructureCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateRayTracingPipelinesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[], paramarg3: VkAllocationCallbacks, paramarg4: LongBuffer): number;
    static vkCreateRayTracingPipelinesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[], paramarg3: VkAllocationCallbacks, paramarg4: number[]): number;
    static vkDestroyAccelerationStructureNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetAccelerationStructureHandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: ByteBuffer): number;
    static vkGetAccelerationStructureHandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: LongBuffer): number;
    static vkGetAccelerationStructureHandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): number;
    static vkGetAccelerationStructureMemoryRequirementsNV(paramarg0: VkDevice, paramarg1: VkAccelerationStructureMemoryRequirementsInfoNV, paramarg2: VkMemoryRequirements2KHR): void;
    static vkGetRayTracingShaderGroupHandlesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): number;
    constructor()
}