import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSwapchainPresentScalingCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentScalingCreateInfoKHR.d.ts'
export class VkSwapchainPresentScalingCreateInfoEXT extends VkSwapchainPresentScalingCreateInfoKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTGRAVITYX: number;
    static PRESENTGRAVITYY: number;
    static SCALINGBEHAVIOR: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSwapchainPresentScalingCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentScalingCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSwapchainPresentScalingCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentScalingCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainPresentScalingCreateInfoEXT;
    static create(paramarg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSwapchainPresentScalingCreateInfoKHR;
    static create(paramarg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainPresentScalingCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentScalingCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSwapchainPresentScalingCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentScalingCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentGravityX(paramarg0: number): number;
    static npresentGravityX(paramarg0: number, paramarg1: number): void;
    static npresentGravityY(paramarg0: number): number;
    static npresentGravityY(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscalingBehavior(paramarg0: number): number;
    static nscalingBehavior(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSwapchainPresentScalingCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    presentGravityX(): number;
    presentGravityX(arg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    presentGravityY(): number;
    presentGravityY(arg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    sType$Default(): VkSwapchainPresentScalingCreateInfoEXT;
    scalingBehavior(): number;
    scalingBehavior(arg0: number): VkSwapchainPresentScalingCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkSwapchainPresentScalingCreateInfoEXT;
    set(arg0: VkSwapchainPresentScalingCreateInfoEXT): VkSwapchainPresentScalingCreateInfoEXT;
    set(arg0: VkSwapchainPresentScalingCreateInfoKHR): VkSwapchainPresentScalingCreateInfoKHR;
}