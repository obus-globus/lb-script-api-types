import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCudaFunctionCreateInfoNV } from '../../../org/lwjgl/vulkan/VkCudaFunctionCreateInfoNV.d.ts'
import type { VkCudaLaunchInfoNV } from '../../../org/lwjgl/vulkan/VkCudaLaunchInfoNV.d.ts'
import type { VkCudaModuleCreateInfoNV } from '../../../org/lwjgl/vulkan/VkCudaModuleCreateInfoNV.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class NVCudaKernelLaunch extends Object {
    static VK_DEBUG_REPORT_OBJECT_TYPE_CUDA_FUNCTION_NV_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_CUDA_MODULE_NV_EXT: number;
    static VK_NV_CUDA_KERNEL_LAUNCH_EXTENSION_NAME: string;
    static VK_NV_CUDA_KERNEL_LAUNCH_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_CUDA_FUNCTION_NV: number;
    static VK_OBJECT_TYPE_CUDA_MODULE_NV: number;
    static VK_STRUCTURE_TYPE_CUDA_FUNCTION_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_CUDA_LAUNCH_INFO_NV: number;
    static VK_STRUCTURE_TYPE_CUDA_MODULE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CUDA_KERNEL_LAUNCH_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CUDA_KERNEL_LAUNCH_PROPERTIES_NV: number;
    static nvkCmdCudaLaunchKernelNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateCudaFunctionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateCudaModuleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyCudaFunctionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkDestroyCudaModuleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetCudaModuleCacheNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCmdCudaLaunchKernelNV(paramarg0: VkCommandBuffer, paramarg1: VkCudaLaunchInfoNV): void;
    static vkCreateCudaFunctionNV(paramarg0: VkDevice, paramarg1: VkCudaFunctionCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateCudaFunctionNV(paramarg0: VkDevice, paramarg1: VkCudaFunctionCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateCudaModuleNV(paramarg0: VkDevice, paramarg1: VkCudaModuleCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateCudaModuleNV(paramarg0: VkDevice, paramarg1: VkCudaModuleCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyCudaFunctionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkDestroyCudaModuleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetCudaModuleCacheNV(paramarg0: VkDevice, paramarg1: number, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    constructor()
}