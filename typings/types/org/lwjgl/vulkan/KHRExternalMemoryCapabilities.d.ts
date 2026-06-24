import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkExternalBufferProperties } from '../../../org/lwjgl/vulkan/VkExternalBufferProperties.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceExternalBufferInfo } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalBufferInfo.d.ts'
export class KHRExternalMemoryCapabilities extends Object {
    static VK_EXTERNAL_MEMORY_FEATURE_DEDICATED_ONLY_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_FEATURE_EXPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_FEATURE_IMPORTABLE_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_TEXTURE_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_TEXTURE_KMT_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D12_HEAP_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D12_RESOURCE_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_FD_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_WIN32_BIT_KHR: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_WIN32_KMT_BIT_KHR: number;
    static VK_KHR_EXTERNAL_MEMORY_CAPABILITIES_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_MEMORY_CAPABILITIES_SPEC_VERSION: number;
    static VK_LUID_SIZE_KHR: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_BUFFER_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_IMAGE_FORMAT_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_BUFFER_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_IMAGE_FORMAT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ID_PROPERTIES_KHR: number;
    static nvkGetPhysicalDeviceExternalBufferPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static vkGetPhysicalDeviceExternalBufferPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceExternalBufferInfo, paramarg2: VkExternalBufferProperties): void;
    constructor()
}