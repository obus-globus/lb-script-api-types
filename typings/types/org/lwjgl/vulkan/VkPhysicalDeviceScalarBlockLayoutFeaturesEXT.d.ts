import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceScalarBlockLayoutFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceScalarBlockLayoutFeatures.d.ts'
export class VkPhysicalDeviceScalarBlockLayoutFeaturesEXT extends VkPhysicalDeviceScalarBlockLayoutFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCALARBLOCKLAYOUT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static create(): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static create(paramarg0: number): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static createSafe(paramarg0: number): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static malloc(): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceScalarBlockLayoutFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscalarBlockLayout(paramarg0: number): number;
    static nscalarBlockLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    sType$Default(): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    scalarBlockLayout(): boolean;
    scalarBlockLayout(arg0: boolean): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
    set(arg0: VkPhysicalDeviceScalarBlockLayoutFeatures): VkPhysicalDeviceScalarBlockLayoutFeatures;
    set(arg0: VkPhysicalDeviceScalarBlockLayoutFeaturesEXT): VkPhysicalDeviceScalarBlockLayoutFeaturesEXT;
}