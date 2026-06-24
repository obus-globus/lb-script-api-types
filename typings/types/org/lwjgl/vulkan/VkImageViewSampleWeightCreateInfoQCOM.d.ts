import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkOffset2D } from '../../../org/lwjgl/vulkan/VkOffset2D.d.ts'
export class VkImageViewSampleWeightCreateInfoQCOM extends Struct<VkImageViewSampleWeightCreateInfoQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FILTERCENTER: number;
    static FILTERSIZE: number;
    static NUMPHASES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageViewSampleWeightCreateInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkImageViewSampleWeightCreateInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageViewSampleWeightCreateInfoQCOM;
    static create(paramarg0: number): VkImageViewSampleWeightCreateInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageViewSampleWeightCreateInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageViewSampleWeightCreateInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkImageViewSampleWeightCreateInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfilterCenter(paramarg0: number): VkOffset2D;
    static nfilterCenter(paramarg0: number, paramarg1: VkOffset2D): void;
    static nfilterSize(paramarg0: number): VkExtent2D;
    static nfilterSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static nnumPhases(paramarg0: number): number;
    static nnumPhases(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageViewSampleWeightCreateInfoQCOM;
    filterCenter(): VkOffset2D;
    filterCenter(arg0: (param0: VkOffset2D) => void): VkImageViewSampleWeightCreateInfoQCOM;
    filterCenter(arg0: VkOffset2D): VkImageViewSampleWeightCreateInfoQCOM;
    filterSize(): VkExtent2D;
    filterSize(arg0: (param0: VkExtent2D) => void): VkImageViewSampleWeightCreateInfoQCOM;
    filterSize(arg0: VkExtent2D): VkImageViewSampleWeightCreateInfoQCOM;
    numPhases(): number;
    numPhases(arg0: number): VkImageViewSampleWeightCreateInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkImageViewSampleWeightCreateInfoQCOM;
    sType(): number;
    sType(arg0: number): VkImageViewSampleWeightCreateInfoQCOM;
    sType$Default(): VkImageViewSampleWeightCreateInfoQCOM;
    set(arg0: number, arg1: number, arg2: VkOffset2D, arg3: VkExtent2D, arg4: number): VkImageViewSampleWeightCreateInfoQCOM;
    set(arg0: VkImageViewSampleWeightCreateInfoQCOM): VkImageViewSampleWeightCreateInfoQCOM;
    sizeof(): number;
}