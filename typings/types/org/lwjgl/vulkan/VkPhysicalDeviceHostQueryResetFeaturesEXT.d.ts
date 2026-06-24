import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceHostQueryResetFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceHostQueryResetFeatures.d.ts'
export class VkPhysicalDeviceHostQueryResetFeaturesEXT extends VkPhysicalDeviceHostQueryResetFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HOSTQUERYRESET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceHostQueryResetFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceHostQueryResetFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceHostQueryResetFeatures;
    static create(paramarg0: number): VkPhysicalDeviceHostQueryResetFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceHostQueryResetFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceHostQueryResetFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceHostQueryResetFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhostQueryReset(paramarg0: number): number;
    static nhostQueryReset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    hostQueryReset(): boolean;
    hostQueryReset(arg0: boolean): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    sType$Default(): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceHostQueryResetFeaturesEXT;
    set(arg0: VkPhysicalDeviceHostQueryResetFeatures): VkPhysicalDeviceHostQueryResetFeatures;
    set(arg0: VkPhysicalDeviceHostQueryResetFeaturesEXT): VkPhysicalDeviceHostQueryResetFeaturesEXT;
}