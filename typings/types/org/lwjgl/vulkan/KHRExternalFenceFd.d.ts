import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkFenceGetFdInfoKHR } from '../../../org/lwjgl/vulkan/VkFenceGetFdInfoKHR.d.ts'
import type { VkImportFenceFdInfoKHR } from '../../../org/lwjgl/vulkan/VkImportFenceFdInfoKHR.d.ts'
export class KHRExternalFenceFd extends Object {
    static VK_KHR_EXTERNAL_FENCE_FD_EXTENSION_NAME: string;
    static VK_KHR_EXTERNAL_FENCE_FD_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_FENCE_GET_FD_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMPORT_FENCE_FD_INFO_KHR: number;
    static nvkGetFenceFdKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkImportFenceFdKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetFenceFdKHR(paramarg0: VkDevice, paramarg1: VkFenceGetFdInfoKHR, paramarg2: number[]): number;
    static vkGetFenceFdKHR(paramarg0: VkDevice, paramarg1: VkFenceGetFdInfoKHR, paramarg2: IntBuffer): number;
    static vkImportFenceFdKHR(paramarg0: VkDevice, paramarg1: VkImportFenceFdInfoKHR): number;
    constructor()
}