import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkFenceGetWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkFenceGetWin32HandleInfoKHR.d.ts'
import type { VkImportFenceWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkImportFenceWin32HandleInfoKHR.d.ts'
export class KHRExternalFenceWin32 extends Object {
    static VK_KHR_EXTERNAL_FENCE_WIN32_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_FENCE_WIN32_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_EXPORT_FENCE_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_FENCE_GET_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMPORT_FENCE_WIN32_HANDLE_INFO_KHR: number;
    static nvkGetFenceWin32HandleKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkImportFenceWin32HandleKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetFenceWin32HandleKHR(paramarg0: VkDevice, paramarg1: VkFenceGetWin32HandleInfoKHR, paramarg2: PointerBuffer): number;
    static vkImportFenceWin32HandleKHR(paramarg0: VkDevice, paramarg1: VkImportFenceWin32HandleInfoKHR): number;
    constructor()
}