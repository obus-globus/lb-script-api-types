import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkMetalSurfaceCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkMetalSurfaceCreateInfoEXT.d.ts'
export class EXTMetalSurface extends Object {
    static VK_EXT_METAL_SURFACE_EXTENSION_NAME: string;
    static VK_EXT_METAL_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_METAL_SURFACE_CREATE_INFO_EXT: number;
    static nvkCreateMetalSurfaceEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateMetalSurfaceEXT(paramarg0: VkInstance, paramarg1: VkMetalSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateMetalSurfaceEXT(paramarg0: VkInstance, paramarg1: VkMetalSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}