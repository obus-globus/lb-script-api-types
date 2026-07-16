import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDevicePipelineCreationCacheControlFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDevicePipelineCreationCacheControlFeatures.d.ts'
export class VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT extends VkPhysicalDevicePipelineCreationCacheControlFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINECREATIONCACHECONTROL: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static create(): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static create(paramarg0: number): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static malloc(): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineCreationCacheControl(paramarg0: number): number;
    static npipelineCreationCacheControl(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    pipelineCreationCacheControl(): boolean;
    pipelineCreationCacheControl(arg0: boolean): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    sType$Default(): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
    set(arg0: VkPhysicalDevicePipelineCreationCacheControlFeatures): VkPhysicalDevicePipelineCreationCacheControlFeatures;
    set(arg0: VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT): VkPhysicalDevicePipelineCreationCacheControlFeaturesEXT;
}