import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkExternalSemaphoreProperties } from '../../../org/lwjgl/vulkan/VkExternalSemaphoreProperties.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceExternalSemaphoreInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalSemaphoreInfo.d.ts'
export class KHRExternalSemaphoreCapabilities extends Object {
    static VK_EXTERNAL_SEMAPHORE_FEATURE_EXPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_FEATURE_IMPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_D3D12_FENCE_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_OPAQUE_FD_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_OPAQUE_WIN32_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_OPAQUE_WIN32_KMT_BIT_KHR: number;
    static VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_SYNC_FD_BIT_KHR: number;
    static VK_KHR_EXTERNAL_SEMAPHORE_CAPABILITIES_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_SEMAPHORE_CAPABILITIES_SPEC_VERSION: number;
    static VK_LUID_SIZE_KHR: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_SEMAPHORE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_SEMAPHORE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ID_PROPERTIES_KHR: number;
    static nvkGetPhysicalDeviceExternalSemaphorePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static vkGetPhysicalDeviceExternalSemaphorePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceExternalSemaphoreInfo, paramarg2: VkExternalSemaphoreProperties): void;
    constructor()
}