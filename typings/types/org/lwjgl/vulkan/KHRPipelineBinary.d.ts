import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPipelineBinaryCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryCreateInfoKHR.d.ts'
import type { VkPipelineBinaryDataInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryDataInfoKHR.d.ts'
import type { VkPipelineBinaryHandlesInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryHandlesInfoKHR.d.ts'
import type { VkPipelineBinaryKeyKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryKeyKHR.d.ts'
import type { VkPipelineCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateInfoKHR.d.ts'
import type { VkReleaseCapturedPipelineDataInfoKHR } from '../../../org/lwjgl/vulkan/VkReleaseCapturedPipelineDataInfoKHR.d.ts'
export class KHRPipelineBinary extends Object {
    static VK_ERROR_NOT_ENOUGH_SPACE_KHR: number;
    static VK_KHR_PIPELINE_BINARY_EXTENSION_NAME: string;
    static VK_KHR_PIPELINE_BINARY_SPEC_VERSION: number;
    static VK_MAX_PIPELINE_BINARY_KEY_SIZE_KHR: number;
    static VK_OBJECT_TYPE_PIPELINE_BINARY_KHR: number;
    static VK_PIPELINE_BINARY_MISSING_KHR: number;
    static VK_PIPELINE_CREATE_2_CAPTURE_DATA_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_PIPELINE_BINARY_INTERNAL_CACHE_CONTROL_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PIPELINE_BINARY_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PIPELINE_BINARY_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_BINARY_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_BINARY_DATA_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_BINARY_HANDLES_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_BINARY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_BINARY_KEY_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RELEASE_CAPTURED_PIPELINE_DATA_INFO_KHR: number;
    static nvkCreatePipelineBinariesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyPipelineBinaryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPipelineBinaryDataKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkGetPipelineKeyKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkReleaseCapturedPipelineDataKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCreatePipelineBinariesKHR(paramarg0: VkDevice, paramarg1: VkPipelineBinaryCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: VkPipelineBinaryHandlesInfoKHR): number;
    static vkDestroyPipelineBinaryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetPipelineBinaryDataKHR(paramarg0: VkDevice, paramarg1: VkPipelineBinaryDataInfoKHR, paramarg2: VkPipelineBinaryKeyKHR, paramarg3: PointerBuffer, paramarg4: ByteBuffer): number;
    static vkGetPipelineKeyKHR(paramarg0: VkDevice, paramarg1: VkPipelineCreateInfoKHR, paramarg2: VkPipelineBinaryKeyKHR): number;
    static vkReleaseCapturedPipelineDataKHR(paramarg0: VkDevice, paramarg1: VkReleaseCapturedPipelineDataInfoKHR, paramarg2: VkAllocationCallbacks): number;
    constructor()
}