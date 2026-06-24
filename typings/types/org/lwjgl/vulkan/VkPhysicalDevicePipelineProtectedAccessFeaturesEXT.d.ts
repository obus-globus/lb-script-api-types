import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDevicePipelineProtectedAccessFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDevicePipelineProtectedAccessFeatures.d.ts'
export class VkPhysicalDevicePipelineProtectedAccessFeaturesEXT extends VkPhysicalDevicePipelineProtectedAccessFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINEPROTECTEDACCESS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static create(paramarg0: number): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineProtectedAccessFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineProtectedAccess(paramarg0: number): number;
    static npipelineProtectedAccess(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    pipelineProtectedAccess(): boolean;
    pipelineProtectedAccess(arg0: boolean): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    sType$Default(): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
    set(arg0: VkPhysicalDevicePipelineProtectedAccessFeatures): VkPhysicalDevicePipelineProtectedAccessFeatures;
    set(arg0: VkPhysicalDevicePipelineProtectedAccessFeaturesEXT): VkPhysicalDevicePipelineProtectedAccessFeaturesEXT;
}