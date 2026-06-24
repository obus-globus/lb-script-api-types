import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkInitializePerformanceApiInfoINTEL } from '../../../org/lwjgl/vulkan/VkInitializePerformanceApiInfoINTEL.d.ts'
import type { VkPerformanceConfigurationAcquireInfoINTEL } from '../../../org/lwjgl/vulkan/VkPerformanceConfigurationAcquireInfoINTEL.d.ts'
import type { VkPerformanceMarkerInfoINTEL } from '../../../org/lwjgl/vulkan/VkPerformanceMarkerInfoINTEL.d.ts'
import type { VkPerformanceOverrideInfoINTEL } from '../../../org/lwjgl/vulkan/VkPerformanceOverrideInfoINTEL.d.ts'
import type { VkPerformanceStreamMarkerInfoINTEL } from '../../../org/lwjgl/vulkan/VkPerformanceStreamMarkerInfoINTEL.d.ts'
import type { VkPerformanceValueINTEL } from '../../../org/lwjgl/vulkan/VkPerformanceValueINTEL.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
export class INTELPerformanceQuery extends Object {
    static VK_INTEL_PERFORMANCE_QUERY_EXTENSION_NAME: string;
    static VK_INTEL_PERFORMANCE_QUERY_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_PERFORMANCE_CONFIGURATION_INTEL: number;
    static VK_PERFORMANCE_CONFIGURATION_TYPE_COMMAND_QUEUE_METRICS_DISCOVERY_ACTIVATED_INTEL: number;
    static VK_PERFORMANCE_OVERRIDE_TYPE_FLUSH_GPU_CACHES_INTEL: number;
    static VK_PERFORMANCE_OVERRIDE_TYPE_NULL_HARDWARE_INTEL: number;
    static VK_PERFORMANCE_PARAMETER_TYPE_HW_COUNTERS_SUPPORTED_INTEL: number;
    static VK_PERFORMANCE_PARAMETER_TYPE_STREAM_MARKER_VALID_BITS_INTEL: number;
    static VK_PERFORMANCE_VALUE_TYPE_BOOL_INTEL: number;
    static VK_PERFORMANCE_VALUE_TYPE_FLOAT_INTEL: number;
    static VK_PERFORMANCE_VALUE_TYPE_STRING_INTEL: number;
    static VK_PERFORMANCE_VALUE_TYPE_UINT32_INTEL: number;
    static VK_PERFORMANCE_VALUE_TYPE_UINT64_INTEL: number;
    static VK_QUERY_POOL_SAMPLING_MODE_MANUAL_INTEL: number;
    static VK_QUERY_TYPE_PERFORMANCE_QUERY_INTEL: number;
    static VK_STRUCTURE_TYPE_INITIALIZE_PERFORMANCE_API_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_CONFIGURATION_ACQUIRE_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_MARKER_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_OVERRIDE_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_STREAM_MARKER_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_QUERY_POOL_CREATE_INFO_INTEL: number;
    static VK_STRUCTURE_TYPE_QUERY_POOL_PERFORMANCE_QUERY_CREATE_INFO_INTEL: number;
    static nvkAcquirePerformanceConfigurationINTEL(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCmdSetPerformanceMarkerINTEL(paramarg0: VkCommandBuffer, paramarg1: number): number;
    static nvkCmdSetPerformanceOverrideINTEL(paramarg0: VkCommandBuffer, paramarg1: number): number;
    static nvkCmdSetPerformanceStreamMarkerINTEL(paramarg0: VkCommandBuffer, paramarg1: number): number;
    static nvkGetPerformanceParameterINTEL(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkInitializePerformanceApiINTEL(paramarg0: VkDevice, paramarg1: number): number;
    static vkAcquirePerformanceConfigurationINTEL(paramarg0: VkDevice, paramarg1: VkPerformanceConfigurationAcquireInfoINTEL, paramarg2: LongBuffer): number;
    static vkAcquirePerformanceConfigurationINTEL(paramarg0: VkDevice, paramarg1: VkPerformanceConfigurationAcquireInfoINTEL, paramarg2: number[]): number;
    static vkCmdSetPerformanceMarkerINTEL(paramarg0: VkCommandBuffer, paramarg1: VkPerformanceMarkerInfoINTEL): number;
    static vkCmdSetPerformanceOverrideINTEL(paramarg0: VkCommandBuffer, paramarg1: VkPerformanceOverrideInfoINTEL): number;
    static vkCmdSetPerformanceStreamMarkerINTEL(paramarg0: VkCommandBuffer, paramarg1: VkPerformanceStreamMarkerInfoINTEL): number;
    static vkGetPerformanceParameterINTEL(paramarg0: VkDevice, paramarg1: number, paramarg2: VkPerformanceValueINTEL): number;
    static vkInitializePerformanceApiINTEL(paramarg0: VkDevice, paramarg1: VkInitializePerformanceApiInfoINTEL): number;
    static vkQueueSetPerformanceConfigurationINTEL(paramarg0: VkQueue, paramarg1: number): number;
    static vkReleasePerformanceConfigurationINTEL(paramarg0: VkDevice, paramarg1: number): number;
    static vkUninitializePerformanceApiINTEL(paramarg0: VkDevice): void;
    constructor()
}