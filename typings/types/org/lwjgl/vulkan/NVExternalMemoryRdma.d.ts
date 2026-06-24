import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryGetRemoteAddressInfoNV } from '../../../org/lwjgl/vulkan/VkMemoryGetRemoteAddressInfoNV.d.ts'
export class NVExternalMemoryRdma extends Object {
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_RDMA_ADDRESS_BIT_NV: number;
    static VK_MEMORY_PROPERTY_RDMA_CAPABLE_BIT_NV: number;
    static VK_NV_EXTERNAL_MEMORY_RDMA_EXTENSION_NAME: string;
    static VK_NV_EXTERNAL_MEMORY_RDMA_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_MEMORY_GET_REMOTE_ADDRESS_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_MEMORY_RDMA_FEATURES_NV: number;
    static nvkGetMemoryRemoteAddressNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetMemoryRemoteAddressNV(paramarg0: VkDevice, paramarg1: VkMemoryGetRemoteAddressInfoNV, paramarg2: PointerBuffer): number;
    constructor()
}