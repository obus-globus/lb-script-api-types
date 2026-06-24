import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSwapchainPresentScalingCreateInfoKHR extends Struct<VkSwapchainPresentScalingCreateInfoKHR> implements NativeResource {
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
    static calloc(): VkSwapchainPresentScalingCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentScalingCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainPresentScalingCreateInfoKHR;
    static create(paramarg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
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
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSwapchainPresentScalingCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    presentGravityX(): number;
    presentGravityX(arg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    presentGravityY(): number;
    presentGravityY(arg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    sType$Default(): VkSwapchainPresentScalingCreateInfoKHR;
    scalingBehavior(): number;
    scalingBehavior(arg0: number): VkSwapchainPresentScalingCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkSwapchainPresentScalingCreateInfoKHR;
    set(arg0: VkSwapchainPresentScalingCreateInfoKHR): VkSwapchainPresentScalingCreateInfoKHR;
    sizeof(): number;
}