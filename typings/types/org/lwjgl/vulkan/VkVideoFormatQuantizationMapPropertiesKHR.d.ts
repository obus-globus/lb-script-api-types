import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkVideoFormatQuantizationMapPropertiesKHR extends Struct<VkVideoFormatQuantizationMapPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUANTIZATIONMAPTEXELSIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoFormatQuantizationMapPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoFormatQuantizationMapPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoFormatQuantizationMapPropertiesKHR;
    static create(paramarg0: number): VkVideoFormatQuantizationMapPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoFormatQuantizationMapPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoFormatQuantizationMapPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoFormatQuantizationMapPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nquantizationMapTexelSize(paramarg0: number): VkExtent2D;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoFormatQuantizationMapPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoFormatQuantizationMapPropertiesKHR;
    quantizationMapTexelSize(): VkExtent2D;
    sType(): number;
    sType(arg0: number): VkVideoFormatQuantizationMapPropertiesKHR;
    sType$Default(): VkVideoFormatQuantizationMapPropertiesKHR;
    set(arg0: number, arg1: number): VkVideoFormatQuantizationMapPropertiesKHR;
    set(arg0: VkVideoFormatQuantizationMapPropertiesKHR): VkVideoFormatQuantizationMapPropertiesKHR;
    sizeof(): number;
}