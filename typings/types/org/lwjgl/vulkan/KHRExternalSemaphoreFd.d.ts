import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImportSemaphoreFdInfoKHR } from '../../../org/lwjgl/vulkan/VkImportSemaphoreFdInfoKHR.d.ts'
import type { VkSemaphoreGetFdInfoKHR } from '../../../org/lwjgl/vulkan/VkSemaphoreGetFdInfoKHR.d.ts'
export class KHRExternalSemaphoreFd extends Object {
    static VK_KHR_EXTERNAL_SEMAPHORE_FD_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_SEMAPHORE_FD_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_IMPORT_SEMAPHORE_FD_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SEMAPHORE_GET_FD_INFO_KHR: number;
    static nvkGetSemaphoreFdKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkImportSemaphoreFdKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetSemaphoreFdKHR(paramarg0: VkDevice, paramarg1: VkSemaphoreGetFdInfoKHR, paramarg2: number[]): number;
    static vkGetSemaphoreFdKHR(paramarg0: VkDevice, paramarg1: VkSemaphoreGetFdInfoKHR, paramarg2: IntBuffer): number;
    static vkImportSemaphoreFdKHR(paramarg0: VkDevice, paramarg1: VkImportSemaphoreFdInfoKHR): number;
    constructor()
}