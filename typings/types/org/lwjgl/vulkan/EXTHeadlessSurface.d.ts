import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkHeadlessSurfaceCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkHeadlessSurfaceCreateInfoEXT.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class EXTHeadlessSurface extends Object {
    static VK_EXT_HEADLESS_SURFACE_EXTENSION_NAME: string;
    static VK_EXT_HEADLESS_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_HEADLESS_SURFACE_CREATE_INFO_EXT: number;
    static nvkCreateHeadlessSurfaceEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateHeadlessSurfaceEXT(paramarg0: VkInstance, paramarg1: VkHeadlessSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateHeadlessSurfaceEXT(paramarg0: VkInstance, paramarg1: VkHeadlessSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}