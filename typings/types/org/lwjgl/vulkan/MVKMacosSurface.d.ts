import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkMacOSSurfaceCreateInfoMVK } from '../../../org/lwjgl/vulkan/VkMacOSSurfaceCreateInfoMVK.d.ts'
export class MVKMacosSurface extends Object {
    static VK_MVK_MACOS_SURFACE_EXTENSION_NAME: string;
    static VK_MVK_MACOS_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_MACOS_SURFACE_CREATE_INFO_MVK: number;
    static nvkCreateMacOSSurfaceMVK(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateMacOSSurfaceMVK(paramarg0: VkInstance, paramarg1: VkMacOSSurfaceCreateInfoMVK, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateMacOSSurfaceMVK(paramarg0: VkInstance, paramarg1: VkMacOSSurfaceCreateInfoMVK, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}