import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkAndroidSurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkAndroidSurfaceCreateInfoKHR.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class KHRAndroidSurface extends Object {
    static VK_KHR_ANDROID_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_ANDROID_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_ANDROID_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateAndroidSurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateAndroidSurfaceKHR(paramarg0: VkInstance, paramarg1: VkAndroidSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateAndroidSurfaceKHR(paramarg0: VkInstance, paramarg1: VkAndroidSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}