import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkRefreshCycleDurationGOOGLE } from '../../../org/lwjgl/vulkan/VkRefreshCycleDurationGOOGLE.d.ts'
export class GOOGLEDisplayTiming extends Object {
    static VK_GOOGLE_DISPLAY_TIMING_EXTENSION_NAME: string;
    static VK_GOOGLE_DISPLAY_TIMING_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PRESENT_TIMES_INFO_GOOGLE: number;
    static nvkGetPastPresentationTimingGOOGLE(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetRefreshCycleDurationGOOGLE(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPastPresentationTimingGOOGLE(paramarg0: VkDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPastPresentationTimingGOOGLE(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetRefreshCycleDurationGOOGLE(paramarg0: VkDevice, paramarg1: number, paramarg2: VkRefreshCycleDurationGOOGLE): number;
    constructor()
}