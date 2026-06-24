import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkExternalFenceProperties } from '../../../org/lwjgl/vulkan/VkExternalFenceProperties.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceExternalFenceInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalFenceInfo.d.ts'
export class KHRExternalFenceCapabilities extends Object {
    static VK_EXTERNAL_FENCE_FEATURE_EXPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_FENCE_FEATURE_IMPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_FENCE_HANDLE_TYPE_OPAQUE_FD_BIT_KHR: number;
    static VK_EXTERNAL_FENCE_HANDLE_TYPE_OPAQUE_WIN32_BIT_KHR: number;
    static VK_EXTERNAL_FENCE_HANDLE_TYPE_OPAQUE_WIN32_KMT_BIT_KHR: number;
    static VK_EXTERNAL_FENCE_HANDLE_TYPE_SYNC_FD_BIT_KHR: number;
    static VK_KHR_EXTERNAL_FENCE_CAPABILITIES_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_FENCE_CAPABILITIES_SPEC_VERSION: number;
    static VK_LUID_SIZE_KHR: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_FENCE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_FENCE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ID_PROPERTIES_KHR: number;
    static nvkGetPhysicalDeviceExternalFencePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static vkGetPhysicalDeviceExternalFencePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceExternalFenceInfo, paramarg2: VkExternalFenceProperties): void;
    constructor()
}