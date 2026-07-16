import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupPresentInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupPresentInfoKHR.d.ts'
import type { VkDisplayPresentInfoKHR } from '../../../org/lwjgl/vulkan/VkDisplayPresentInfoKHR.d.ts'
import type { VkFrameBoundaryEXT } from '../../../org/lwjgl/vulkan/VkFrameBoundaryEXT.d.ts'
import type { VkFrameBoundaryTensorsARM } from '../../../org/lwjgl/vulkan/VkFrameBoundaryTensorsARM.d.ts'
import type { VkPresentId2KHR } from '../../../org/lwjgl/vulkan/VkPresentId2KHR.d.ts'
import type { VkPresentIdKHR } from '../../../org/lwjgl/vulkan/VkPresentIdKHR.d.ts'
import type { VkPresentRegionsKHR } from '../../../org/lwjgl/vulkan/VkPresentRegionsKHR.d.ts'
import type { VkPresentTimesInfoGOOGLE } from '../../../org/lwjgl/vulkan/VkPresentTimesInfoGOOGLE.d.ts'
import type { VkPresentTimingsInfoEXT } from '../../../org/lwjgl/vulkan/VkPresentTimingsInfoEXT.d.ts'
import type { VkSetPresentConfigNV } from '../../../org/lwjgl/vulkan/VkSetPresentConfigNV.d.ts'
import type { VkSwapchainPresentFenceInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainPresentFenceInfoEXT.d.ts'
import type { VkSwapchainPresentFenceInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentFenceInfoKHR.d.ts'
import type { VkSwapchainPresentModeInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModeInfoEXT.d.ts'
import type { VkSwapchainPresentModeInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModeInfoKHR.d.ts'
export class VkPresentInfoKHR extends Struct<VkPresentInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIMAGEINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESULTS: number;
    static PSWAPCHAINS: number;
    static PWAITSEMAPHORES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static WAITSEMAPHORECOUNT: number;
    static calloc(): VkPresentInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPresentInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentInfoKHR;
    static create(paramarg0: number): VkPresentInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPresentInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npImageIndices(paramarg0: number): IntBuffer;
    static npImageIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npResults(paramarg0: number): IntBuffer;
    static npResults(paramarg0: number, paramarg1: IntBuffer): void;
    static npSwapchains(paramarg0: number): LongBuffer;
    static npSwapchains(paramarg0: number, paramarg1: LongBuffer): void;
    static npWaitSemaphores(paramarg0: number): LongBuffer;
    static npWaitSemaphores(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreCount(paramarg0: number): number;
    static nwaitSemaphoreCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentInfoKHR;
    pImageIndices(): IntBuffer;
    pImageIndices(arg0: IntBuffer): VkPresentInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPresentInfoKHR;
    pNext(arg0: VkDeviceGroupPresentInfoKHR): VkPresentInfoKHR;
    pNext(arg0: VkDisplayPresentInfoKHR): VkPresentInfoKHR;
    pNext(arg0: VkFrameBoundaryEXT): VkPresentInfoKHR;
    pNext(arg0: VkFrameBoundaryTensorsARM): VkPresentInfoKHR;
    pNext(arg0: VkPresentId2KHR): VkPresentInfoKHR;
    pNext(arg0: VkPresentIdKHR): VkPresentInfoKHR;
    pNext(arg0: VkPresentRegionsKHR): VkPresentInfoKHR;
    pNext(arg0: VkPresentTimesInfoGOOGLE): VkPresentInfoKHR;
    pNext(arg0: VkPresentTimingsInfoEXT): VkPresentInfoKHR;
    pNext(arg0: VkSetPresentConfigNV): VkPresentInfoKHR;
    pNext(arg0: VkSwapchainPresentFenceInfoEXT): VkPresentInfoKHR;
    pNext(arg0: VkSwapchainPresentFenceInfoKHR): VkPresentInfoKHR;
    pNext(arg0: VkSwapchainPresentModeInfoEXT): VkPresentInfoKHR;
    pNext(arg0: VkSwapchainPresentModeInfoKHR): VkPresentInfoKHR;
    pResults(): IntBuffer;
    pResults(arg0: IntBuffer): VkPresentInfoKHR;
    pSwapchains(): LongBuffer;
    pSwapchains(arg0: LongBuffer): VkPresentInfoKHR;
    pWaitSemaphores(): LongBuffer;
    pWaitSemaphores(arg0: LongBuffer): VkPresentInfoKHR;
    sType(): number;
    sType(arg0: number): VkPresentInfoKHR;
    sType$Default(): VkPresentInfoKHR;
    set(arg0: number, arg1: number, arg2: LongBuffer, arg3: number, arg4: LongBuffer, arg5: IntBuffer, arg6: IntBuffer): VkPresentInfoKHR;
    set(arg0: VkPresentInfoKHR): VkPresentInfoKHR;
    sizeof(): number;
    swapchainCount(): number;
    swapchainCount(arg0: number): VkPresentInfoKHR;
    waitSemaphoreCount(): number;
}