import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBufferDeviceAddressInfo } from '../../../org/lwjgl/vulkan/VkBufferDeviceAddressInfo.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTBufferDeviceAddress extends Object {
    static VK_BUFFER_CREATE_DEVICE_ADDRESS_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_BUFFER_USAGE_SHADER_DEVICE_ADDRESS_BIT_EXT: number;
    static VK_ERROR_INVALID_DEVICE_ADDRESS_EXT: number;
    static VK_EXT_BUFFER_DEVICE_ADDRESS_EXTENSION_NAME: string;
    static VK_EXT_BUFFER_DEVICE_ADDRESS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_BUFFER_DEVICE_ADDRESS_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_BUFFER_DEVICE_ADDRESS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_BUFFER_ADDRESS_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_BUFFER_DEVICE_ADDRESS_FEATURES_EXT: number;
    static nvkGetBufferDeviceAddressEXT(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetBufferDeviceAddressEXT(paramarg0: VkDevice, paramarg1: VkBufferDeviceAddressInfo): number;
    constructor()
}