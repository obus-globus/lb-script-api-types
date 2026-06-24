import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceSparseImageFormatInfo2 extends Struct<VkPhysicalDeviceSparseImageFormatInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLES: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILING: number;
    static TYPE: number;
    static USAGE: number;
    static calloc(): VkPhysicalDeviceSparseImageFormatInfo2;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSparseImageFormatInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSparseImageFormatInfo2;
    static create(paramarg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSparseImageFormatInfo2;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSparseImageFormatInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamples(paramarg0: number): number;
    static nsamples(paramarg0: number, paramarg1: number): void;
    static ntiling(paramarg0: number): number;
    static ntiling(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSparseImageFormatInfo2;
    format(): number;
    format(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    sType$Default(): VkPhysicalDeviceSparseImageFormatInfo2;
    samples(): number;
    samples(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkPhysicalDeviceSparseImageFormatInfo2;
    set(arg0: VkPhysicalDeviceSparseImageFormatInfo2): VkPhysicalDeviceSparseImageFormatInfo2;
    sizeof(): number;
    tiling(): number;
    tiling(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    type(): number;
    type(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
    usage(): number;
    usage(arg0: number): VkPhysicalDeviceSparseImageFormatInfo2;
}