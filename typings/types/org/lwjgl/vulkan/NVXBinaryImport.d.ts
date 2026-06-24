import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCuFunctionCreateInfoNVX } from '../../../org/lwjgl/vulkan/VkCuFunctionCreateInfoNVX.d.ts'
import type { VkCuLaunchInfoNVX } from '../../../org/lwjgl/vulkan/VkCuLaunchInfoNVX.d.ts'
import type { VkCuModuleCreateInfoNVX } from '../../../org/lwjgl/vulkan/VkCuModuleCreateInfoNVX.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class NVXBinaryImport extends Object {
    static VK_DEBUG_REPORT_OBJECT_TYPE_CU_FUNCTION_NVX_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_CU_MODULE_NVX_EXT: number;
    static VK_NVX_BINARY_IMPORT_EXTENSION_NAME: string;
    static VK_NVX_BINARY_IMPORT_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_CU_FUNCTION_NVX: number;
    static VK_OBJECT_TYPE_CU_MODULE_NVX: number;
    static VK_STRUCTURE_TYPE_CU_FUNCTION_CREATE_INFO_NVX: number;
    static VK_STRUCTURE_TYPE_CU_LAUNCH_INFO_NVX: number;
    static VK_STRUCTURE_TYPE_CU_MODULE_CREATE_INFO_NVX: number;
    static VK_STRUCTURE_TYPE_CU_MODULE_TEXTURING_MODE_CREATE_INFO_NVX: number;
    static nvkCmdCuLaunchKernelNVX(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateCuFunctionNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateCuModuleNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyCuFunctionNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkDestroyCuModuleNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdCuLaunchKernelNVX(paramarg0: VkCommandBuffer, paramarg1: VkCuLaunchInfoNVX): void;
    static vkCreateCuFunctionNVX(paramarg0: VkDevice, paramarg1: VkCuFunctionCreateInfoNVX, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateCuFunctionNVX(paramarg0: VkDevice, paramarg1: VkCuFunctionCreateInfoNVX, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateCuModuleNVX(paramarg0: VkDevice, paramarg1: VkCuModuleCreateInfoNVX, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateCuModuleNVX(paramarg0: VkDevice, paramarg1: VkCuModuleCreateInfoNVX, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyCuFunctionNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkDestroyCuModuleNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    constructor()
}