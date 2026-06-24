import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT extends Struct<VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT> implements NativeResource {
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
    static YCBCR2PLANE444FORMATS: number;
    static calloc(): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nycbcr2plane444Formats(paramarg0: number): number;
    static nycbcr2plane444Formats(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    sType$Default(): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    set(arg0: VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
    sizeof(): number;
    ycbcr2plane444Formats(): boolean;
    ycbcr2plane444Formats(arg0: boolean): VkPhysicalDeviceYcbcr2Plane444FormatsFeaturesEXT;
}