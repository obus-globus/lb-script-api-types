import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBufferDeviceAddressInfo } from '../../../org/lwjgl/vulkan/VkBufferDeviceAddressInfo.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceMemoryOpaqueCaptureAddressInfo } from '../../../org/lwjgl/vulkan/VkDeviceMemoryOpaqueCaptureAddressInfo.d.ts'
export class KHRBufferDeviceAddress extends Object {
    static VK_BUFFER_CREATE_DEVICE_ADDRESS_CAPTURE_REPLAY_BIT_KHR: number;
    static VK_BUFFER_USAGE_SHADER_DEVICE_ADDRESS_BIT_KHR: number;
    static VK_ERROR_INVALID_OPAQUE_CAPTURE_ADDRESS_KHR: number;
    static VK_KHR_BUFFER_DEVICE_ADDRESS_EXTENSION_NAME: string;
    static VK_KHR_BUFFER_DEVICE_ADDRESS_SPEC_VERSION: number;
    static VK_MEMORY_ALLOCATE_DEVICE_ADDRESS_BIT_KHR: number;
    static VK_MEMORY_ALLOCATE_DEVICE_ADDRESS_CAPTURE_REPLAY_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_BUFFER_DEVICE_ADDRESS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BUFFER_OPAQUE_CAPTURE_ADDRESS_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_MEMORY_OPAQUE_CAPTURE_ADDRESS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_OPAQUE_CAPTURE_ADDRESS_ALLOCATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_BUFFER_DEVICE_ADDRESS_FEATURES_KHR: number;
    static nvkGetBufferDeviceAddressKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetBufferOpaqueCaptureAddressKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetDeviceMemoryOpaqueCaptureAddressKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetBufferDeviceAddressKHR(paramarg0: VkDevice, paramarg1: VkBufferDeviceAddressInfo): number;
    static vkGetBufferOpaqueCaptureAddressKHR(paramarg0: VkDevice, paramarg1: VkBufferDeviceAddressInfo): number;
    static vkGetDeviceMemoryOpaqueCaptureAddressKHR(paramarg0: VkDevice, paramarg1: VkDeviceMemoryOpaqueCaptureAddressInfo): number;
    constructor()
}