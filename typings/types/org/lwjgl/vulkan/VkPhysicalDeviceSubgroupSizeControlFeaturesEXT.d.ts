import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceSubgroupSizeControlFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSubgroupSizeControlFeatures.d.ts'
export class VkPhysicalDeviceSubgroupSizeControlFeaturesEXT extends VkPhysicalDeviceSubgroupSizeControlFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPUTEFULLSUBGROUPS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBGROUPSIZECONTROL: number;
    static calloc(): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static create(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomputeFullSubgroups(paramarg0: number): number;
    static ncomputeFullSubgroups(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubgroupSizeControl(paramarg0: number): number;
    static nsubgroupSizeControl(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    computeFullSubgroups(): boolean;
    computeFullSubgroups(arg0: boolean): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    sType$Default(): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    set(arg0: VkPhysicalDeviceSubgroupSizeControlFeatures): VkPhysicalDeviceSubgroupSizeControlFeatures;
    set(arg0: VkPhysicalDeviceSubgroupSizeControlFeaturesEXT): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
    subgroupSizeControl(): boolean;
    subgroupSizeControl(arg0: boolean): VkPhysicalDeviceSubgroupSizeControlFeaturesEXT;
}