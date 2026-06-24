import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDirectFBSurfaceCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDirectFBSurfaceCreateInfoEXT.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class EXTDirectfbSurface extends Object {
    static VK_EXT_DIRECTFB_SURFACE_EXTENSION_NAME: string;
    static VK_EXT_DIRECTFB_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DIRECTFB_SURFACE_CREATE_INFO_EXT: number;
    static nvkCreateDirectFBSurfaceEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateDirectFBSurfaceEXT(paramarg0: VkInstance, paramarg1: VkDirectFBSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDirectFBSurfaceEXT(paramarg0: VkInstance, paramarg1: VkDirectFBSurfaceCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetPhysicalDeviceDirectFBPresentationSupportEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): boolean;
    constructor()
}