import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class EXTAcquireXlibDisplay extends Object {
    static VK_EXT_ACQUIRE_XLIB_DISPLAY_EXTENSION_NAME: string;
    static VK_EXT_ACQUIRE_XLIB_DISPLAY_SPEC_VERSION: number;
    static nvkGetRandROutputDisplayEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkAcquireXlibDisplayEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetRandROutputDisplayEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): number;
    static vkGetRandROutputDisplayEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    constructor()
}