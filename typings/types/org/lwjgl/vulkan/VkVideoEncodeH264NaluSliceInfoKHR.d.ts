import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264SliceHeader } from '../../../org/lwjgl/vulkan/video/StdVideoEncodeH264SliceHeader.d.ts'
export class VkVideoEncodeH264NaluSliceInfoKHR extends Struct<VkVideoEncodeH264NaluSliceInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSTANTQP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDSLICEHEADER: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH264NaluSliceInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264NaluSliceInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264NaluSliceInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264NaluSliceInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264NaluSliceInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264NaluSliceInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264NaluSliceInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconstantQp(paramarg0: number): number;
    static nconstantQp(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdSliceHeader(paramarg0: number): StdVideoEncodeH264SliceHeader;
    static npStdSliceHeader(paramarg0: number, paramarg1: StdVideoEncodeH264SliceHeader): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constantQp(): number;
    constantQp(arg0: number): VkVideoEncodeH264NaluSliceInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264NaluSliceInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264NaluSliceInfoKHR;
    pStdSliceHeader(): StdVideoEncodeH264SliceHeader;
    pStdSliceHeader(arg0: StdVideoEncodeH264SliceHeader): VkVideoEncodeH264NaluSliceInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264NaluSliceInfoKHR;
    sType$Default(): VkVideoEncodeH264NaluSliceInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: StdVideoEncodeH264SliceHeader): VkVideoEncodeH264NaluSliceInfoKHR;
    set(arg0: VkVideoEncodeH264NaluSliceInfoKHR): VkVideoEncodeH264NaluSliceInfoKHR;
    sizeof(): number;
}