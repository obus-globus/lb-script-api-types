import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkExternalImageFormatPropertiesNV } from '../../../org/lwjgl/vulkan/VkExternalImageFormatPropertiesNV.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVExternalMemoryCapabilities extends Object {
    static VK_EXTERNAL_MEMORY_FEATURE_DEDICATED_ONLY_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_FEATURE_EXPORTABLE_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_FEATURE_IMPORTABLE_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_IMAGE_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_IMAGE_KMT_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_WIN32_BIT_NV: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_WIN32_KMT_BIT_NV: number;
    static VK_NV_EXTERNAL_MEMORY_CAPABILITIES_EXTENSION_NAME: string;
    static VK_NV_EXTERNAL_MEMORY_CAPABILITIES_SPEC_VERSION: number;
    static nvkGetPhysicalDeviceExternalImageFormatPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static vkGetPhysicalDeviceExternalImageFormatPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: VkExternalImageFormatPropertiesNV): number;
    constructor()
}