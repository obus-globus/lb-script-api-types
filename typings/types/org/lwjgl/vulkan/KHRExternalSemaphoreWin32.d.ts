import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImportSemaphoreWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkImportSemaphoreWin32HandleInfoKHR.d.ts'
import type { VkSemaphoreGetWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkSemaphoreGetWin32HandleInfoKHR.d.ts'
export class KHRExternalSemaphoreWin32 extends Object {
    static VK_KHR_EXTERNAL_SEMAPHORE_WIN32_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_SEMAPHORE_WIN32_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_D3D12_FENCE_SUBMIT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_EXPORT_SEMAPHORE_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMPORT_SEMAPHORE_WIN32_HANDLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SEMAPHORE_GET_WIN32_HANDLE_INFO_KHR: number;
    static nvkGetSemaphoreWin32HandleKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkImportSemaphoreWin32HandleKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetSemaphoreWin32HandleKHR(paramarg0: VkDevice, paramarg1: VkSemaphoreGetWin32HandleInfoKHR, paramarg2: PointerBuffer): number;
    static vkImportSemaphoreWin32HandleKHR(paramarg0: VkDevice, paramarg1: VkImportSemaphoreWin32HandleInfoKHR): number;
    constructor()
}