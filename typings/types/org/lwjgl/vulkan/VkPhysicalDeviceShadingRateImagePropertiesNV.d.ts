import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPhysicalDeviceShadingRateImagePropertiesNV extends Struct<VkPhysicalDeviceShadingRateImagePropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADINGRATEMAXCOARSESAMPLES: number;
    static SHADINGRATEPALETTESIZE: number;
    static SHADINGRATETEXELSIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShadingRateImagePropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshadingRateMaxCoarseSamples(paramarg0: number): number;
    static nshadingRatePaletteSize(paramarg0: number): number;
    static nshadingRateTexelSize(paramarg0: number): VkExtent2D;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShadingRateImagePropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShadingRateImagePropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShadingRateImagePropertiesNV;
    sType$Default(): VkPhysicalDeviceShadingRateImagePropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceShadingRateImagePropertiesNV;
    set(arg0: VkPhysicalDeviceShadingRateImagePropertiesNV): VkPhysicalDeviceShadingRateImagePropertiesNV;
    shadingRateMaxCoarseSamples(): number;
    shadingRatePaletteSize(): number;
    shadingRateTexelSize(): VkExtent2D;
    sizeof(): number;
}