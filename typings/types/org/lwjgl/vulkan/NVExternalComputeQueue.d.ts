import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkExternalComputeQueueCreateInfoNV } from '../../../org/lwjgl/vulkan/VkExternalComputeQueueCreateInfoNV.d.ts'
import type { VkExternalComputeQueueDataParamsNV } from '../../../org/lwjgl/vulkan/VkExternalComputeQueueDataParamsNV.d.ts'
import type { VkExternalComputeQueueNV } from '../../../org/lwjgl/vulkan/VkExternalComputeQueueNV.d.ts'
export class NVExternalComputeQueue extends Object {
    static VK_NV_EXTERNAL_COMPUTE_QUEUE_EXTENSION_NAME: string;
    static VK_NV_EXTERNAL_COMPUTE_QUEUE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_EXTERNAL_COMPUTE_QUEUE_NV: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_COMPUTE_QUEUE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_COMPUTE_QUEUE_DATA_PARAMS_NV: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_COMPUTE_QUEUE_DEVICE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_COMPUTE_QUEUE_PROPERTIES_NV: number;
    static nvkCreateExternalComputeQueueNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyExternalComputeQueueNV(paramarg0: VkDevice, paramarg1: VkExternalComputeQueueNV, paramarg2: number): void;
    static nvkGetExternalComputeQueueDataNV(paramarg0: VkExternalComputeQueueNV, paramarg1: number, paramarg2: number): void;
    static vkCreateExternalComputeQueueNV(paramarg0: VkDevice, paramarg1: VkExternalComputeQueueCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: PointerBuffer): number;
    static vkDestroyExternalComputeQueueNV(paramarg0: VkDevice, paramarg1: VkExternalComputeQueueNV, paramarg2: VkAllocationCallbacks): void;
    static vkGetExternalComputeQueueDataNV(paramarg0: VkExternalComputeQueueNV, paramarg1: VkExternalComputeQueueDataParamsNV, paramarg2: ByteBuffer): void;
    constructor()
}