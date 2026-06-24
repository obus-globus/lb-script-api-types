import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVAcquireWinrtDisplay extends Object {
    static VK_NV_ACQUIRE_WINRT_DISPLAY_EXTENSION_NAME: string;
    static VK_NV_ACQUIRE_WINRT_DISPLAY_SPEC_VERSION: number;
    static nvkGetWinrtDisplayNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkAcquireWinrtDisplayNV(paramarg0: VkPhysicalDevice, paramarg1: number): number;
    static vkGetWinrtDisplayNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: LongBuffer): number;
    static vkGetWinrtDisplayNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[]): number;
    constructor()
}