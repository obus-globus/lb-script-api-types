import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceLineRasterizationFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceLineRasterizationFeatures.d.ts'
export class VkPhysicalDeviceLineRasterizationFeaturesKHR extends VkPhysicalDeviceLineRasterizationFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BRESENHAMLINES: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RECTANGULARLINES: number;
    static SIZEOF: number;
    static SMOOTHLINES: number;
    static STIPPLEDBRESENHAMLINES: number;
    static STIPPLEDRECTANGULARLINES: number;
    static STIPPLEDSMOOTHLINES: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceLineRasterizationFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static create(): VkPhysicalDeviceLineRasterizationFeatures;
    static create(paramarg0: number): VkPhysicalDeviceLineRasterizationFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceLineRasterizationFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static malloc(): VkPhysicalDeviceLineRasterizationFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    static nbresenhamLines(paramarg0: number): number;
    static nbresenhamLines(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrectangularLines(paramarg0: number): number;
    static nrectangularLines(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsmoothLines(paramarg0: number): number;
    static nsmoothLines(paramarg0: number, paramarg1: number): void;
    static nstippledBresenhamLines(paramarg0: number): number;
    static nstippledBresenhamLines(paramarg0: number, paramarg1: number): void;
    static nstippledRectangularLines(paramarg0: number): number;
    static nstippledRectangularLines(paramarg0: number, paramarg1: number): void;
    static nstippledSmoothLines(paramarg0: number): number;
    static nstippledSmoothLines(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bresenhamLines(): boolean;
    bresenhamLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    rectangularLines(): boolean;
    rectangularLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    sType$Default(): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    set(arg0: VkPhysicalDeviceLineRasterizationFeatures): VkPhysicalDeviceLineRasterizationFeatures;
    set(arg0: VkPhysicalDeviceLineRasterizationFeaturesKHR): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    smoothLines(): boolean;
    smoothLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    stippledBresenhamLines(): boolean;
    stippledBresenhamLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    stippledRectangularLines(): boolean;
    stippledRectangularLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
    stippledSmoothLines(): boolean;
    stippledSmoothLines(arg0: boolean): VkPhysicalDeviceLineRasterizationFeaturesKHR;
}