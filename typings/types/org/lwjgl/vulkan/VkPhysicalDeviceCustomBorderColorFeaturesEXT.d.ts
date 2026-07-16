import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCustomBorderColorFeaturesEXT extends Struct<VkPhysicalDeviceCustomBorderColorFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CUSTOMBORDERCOLORS: number;
    static CUSTOMBORDERCOLORWITHOUTFORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncustomBorderColorWithoutFormat(paramarg0: number): number;
    static ncustomBorderColorWithoutFormat(paramarg0: number, paramarg1: number): void;
    static ncustomBorderColors(paramarg0: number): number;
    static ncustomBorderColors(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    customBorderColorWithoutFormat(): boolean;
    customBorderColorWithoutFormat(arg0: boolean): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    customBorderColors(): boolean;
    customBorderColors(arg0: boolean): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    sType$Default(): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    set(arg0: VkPhysicalDeviceCustomBorderColorFeaturesEXT): VkPhysicalDeviceCustomBorderColorFeaturesEXT;
    sizeof(): number;
}