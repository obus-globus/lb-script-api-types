import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryGetWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkMemoryGetWin32HandleInfoKHR.d.ts'
import type { VkMemoryWin32HandlePropertiesKHR } from '../../../org/lwjgl/vulkan/VkMemoryWin32HandlePropertiesKHR.d.ts'
export class KHRExternalMemoryWin32 extends Object {
    static VK_KHR_EXTERNAL_MEMORY_WIN32_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_MEMORY_WIN32_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_EXPORT_MEMORY_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMPORT_MEMORY_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_GET_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_WIN32_HANDLE_PROPERTIES_KHR: number;
    static nvkGetMemoryWin32HandleKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetMemoryWin32HandlePropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetMemoryWin32HandleKHR(paramarg0: VkDevice, paramarg1: VkMemoryGetWin32HandleInfoKHR, paramarg2: PointerBuffer): number;
    static vkGetMemoryWin32HandlePropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: VkMemoryWin32HandlePropertiesKHR): number;
    constructor()
}