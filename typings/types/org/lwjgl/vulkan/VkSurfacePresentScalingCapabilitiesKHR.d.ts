import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkSurfacePresentScalingCapabilitiesKHR extends Struct<VkSurfacePresentScalingCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXSCALEDIMAGEEXTENT: number;
    static MINSCALEDIMAGEEXTENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDPRESENTGRAVITYX: number;
    static SUPPORTEDPRESENTGRAVITYY: number;
    static SUPPORTEDPRESENTSCALING: number;
    static calloc(): VkSurfacePresentScalingCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkSurfacePresentScalingCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfacePresentScalingCapabilitiesKHR;
    static create(paramarg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfacePresentScalingCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkSurfacePresentScalingCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxScaledImageExtent(paramarg0: number): VkExtent2D;
    static nmaxScaledImageExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static nminScaledImageExtent(paramarg0: number): VkExtent2D;
    static nminScaledImageExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedPresentGravityX(paramarg0: number): number;
    static nsupportedPresentGravityX(paramarg0: number, paramarg1: number): void;
    static nsupportedPresentGravityY(paramarg0: number): number;
    static nsupportedPresentGravityY(paramarg0: number, paramarg1: number): void;
    static nsupportedPresentScaling(paramarg0: number): number;
    static nsupportedPresentScaling(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfacePresentScalingCapabilitiesKHR;
    maxScaledImageExtent(): VkExtent2D;
    maxScaledImageExtent(arg0: (param0: VkExtent2D) => void): VkSurfacePresentScalingCapabilitiesKHR;
    maxScaledImageExtent(arg0: VkExtent2D): VkSurfacePresentScalingCapabilitiesKHR;
    minScaledImageExtent(): VkExtent2D;
    minScaledImageExtent(arg0: (param0: VkExtent2D) => void): VkSurfacePresentScalingCapabilitiesKHR;
    minScaledImageExtent(arg0: VkExtent2D): VkSurfacePresentScalingCapabilitiesKHR;
    pNext(): number;
    pNext(arg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    sType(): number;
    sType(arg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    sType$Default(): VkSurfacePresentScalingCapabilitiesKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkExtent2D, arg6: VkExtent2D): VkSurfacePresentScalingCapabilitiesKHR;
    set(arg0: VkSurfacePresentScalingCapabilitiesKHR): VkSurfacePresentScalingCapabilitiesKHR;
    sizeof(): number;
    supportedPresentGravityX(): number;
    supportedPresentGravityX(arg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    supportedPresentGravityY(): number;
    supportedPresentGravityY(arg0: number): VkSurfacePresentScalingCapabilitiesKHR;
    supportedPresentScaling(): number;
    supportedPresentScaling(arg0: number): VkSurfacePresentScalingCapabilitiesKHR;
}