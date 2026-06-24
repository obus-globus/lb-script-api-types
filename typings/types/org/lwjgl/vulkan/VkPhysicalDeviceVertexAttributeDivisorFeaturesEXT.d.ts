import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceVertexAttributeDivisorFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceVertexAttributeDivisorFeatures.d.ts'
export class VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT extends VkPhysicalDeviceVertexAttributeDivisorFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERTEXATTRIBUTEINSTANCERATEDIVISOR: number;
    static VERTEXATTRIBUTEINSTANCERATEZERODIVISOR: number;
    static calloc(): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static create(paramarg0: number): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvertexAttributeInstanceRateDivisor(paramarg0: number): number;
    static nvertexAttributeInstanceRateDivisor(paramarg0: number, paramarg1: number): void;
    static nvertexAttributeInstanceRateZeroDivisor(paramarg0: number): number;
    static nvertexAttributeInstanceRateZeroDivisor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    sType$Default(): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    set(arg0: VkPhysicalDeviceVertexAttributeDivisorFeatures): VkPhysicalDeviceVertexAttributeDivisorFeatures;
    set(arg0: VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    vertexAttributeInstanceRateDivisor(): boolean;
    vertexAttributeInstanceRateDivisor(arg0: boolean): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
    vertexAttributeInstanceRateZeroDivisor(): boolean;
    vertexAttributeInstanceRateZeroDivisor(arg0: boolean): VkPhysicalDeviceVertexAttributeDivisorFeaturesEXT;
}