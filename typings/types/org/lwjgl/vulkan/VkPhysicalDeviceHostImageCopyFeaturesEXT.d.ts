import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceHostImageCopyFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceHostImageCopyFeatures.d.ts'
export class VkPhysicalDeviceHostImageCopyFeaturesEXT extends VkPhysicalDeviceHostImageCopyFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HOSTIMAGECOPY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceHostImageCopyFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceHostImageCopyFeatures;
    static create(paramarg0: number): VkPhysicalDeviceHostImageCopyFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceHostImageCopyFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceHostImageCopyFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhostImageCopy(paramarg0: number): number;
    static nhostImageCopy(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    hostImageCopy(): boolean;
    hostImageCopy(arg0: boolean): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    sType$Default(): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceHostImageCopyFeaturesEXT;
    set(arg0: VkPhysicalDeviceHostImageCopyFeatures): VkPhysicalDeviceHostImageCopyFeatures;
    set(arg0: VkPhysicalDeviceHostImageCopyFeaturesEXT): VkPhysicalDeviceHostImageCopyFeaturesEXT;
}