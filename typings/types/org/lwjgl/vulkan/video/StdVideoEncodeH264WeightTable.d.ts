import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264WeightTableFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264WeightTableFlags.d.ts'
export class StdVideoEncodeH264WeightTable extends Struct<StdVideoEncodeH264WeightTable> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMA_LOG2_WEIGHT_DENOM: number;
    static CHROMA_OFFSET_L0: number;
    static CHROMA_OFFSET_L1: number;
    static CHROMA_WEIGHT_L0: number;
    static CHROMA_WEIGHT_L1: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LUMA_LOG2_WEIGHT_DENOM: number;
    static LUMA_OFFSET_L0: number;
    static LUMA_OFFSET_L1: number;
    static LUMA_WEIGHT_L0: number;
    static LUMA_WEIGHT_L1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264WeightTable;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264WeightTable;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264WeightTable;
    static create(paramarg0: number): StdVideoEncodeH264WeightTable;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264WeightTable;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264WeightTable;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264WeightTable;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchroma_log2_weight_denom(paramarg0: number): number;
    static nchroma_log2_weight_denom(paramarg0: number, paramarg1: number): void;
    static nchroma_offset_l0(paramarg0: number, paramarg1: number): number;
    static nchroma_offset_l0(paramarg0: number): ByteBuffer;
    static nchroma_offset_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nchroma_offset_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nchroma_offset_l1(paramarg0: number, paramarg1: number): number;
    static nchroma_offset_l1(paramarg0: number): ByteBuffer;
    static nchroma_offset_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nchroma_offset_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nchroma_weight_l0(paramarg0: number, paramarg1: number): number;
    static nchroma_weight_l0(paramarg0: number): ByteBuffer;
    static nchroma_weight_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nchroma_weight_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nchroma_weight_l1(paramarg0: number, paramarg1: number): number;
    static nchroma_weight_l1(paramarg0: number): ByteBuffer;
    static nchroma_weight_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nchroma_weight_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoEncodeH264WeightTableFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH264WeightTableFlags): void;
    static nluma_log2_weight_denom(paramarg0: number): number;
    static nluma_log2_weight_denom(paramarg0: number, paramarg1: number): void;
    static nluma_offset_l0(paramarg0: number, paramarg1: number): number;
    static nluma_offset_l0(paramarg0: number): ByteBuffer;
    static nluma_offset_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nluma_offset_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nluma_offset_l1(paramarg0: number, paramarg1: number): number;
    static nluma_offset_l1(paramarg0: number): ByteBuffer;
    static nluma_offset_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nluma_offset_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nluma_weight_l0(paramarg0: number, paramarg1: number): number;
    static nluma_weight_l0(paramarg0: number): ByteBuffer;
    static nluma_weight_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nluma_weight_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nluma_weight_l1(paramarg0: number, paramarg1: number): number;
    static nluma_weight_l1(paramarg0: number): ByteBuffer;
    static nluma_weight_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nluma_weight_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chroma_log2_weight_denom(): number;
    chroma_log2_weight_denom(arg0: number): StdVideoEncodeH264WeightTable;
    chroma_offset_l0(): ByteBuffer;
    chroma_offset_l0(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    chroma_offset_l0(arg0: number): number;
    chroma_offset_l0(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    chroma_offset_l1(): ByteBuffer;
    chroma_offset_l1(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    chroma_offset_l1(arg0: number): number;
    chroma_offset_l1(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    chroma_weight_l0(): ByteBuffer;
    chroma_weight_l0(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    chroma_weight_l0(arg0: number): number;
    chroma_weight_l0(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    chroma_weight_l1(): ByteBuffer;
    chroma_weight_l1(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    chroma_weight_l1(arg0: number): number;
    chroma_weight_l1(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264WeightTable;
    flags(): StdVideoEncodeH264WeightTableFlags;
    flags(arg0: (param0: StdVideoEncodeH264WeightTableFlags) => void): StdVideoEncodeH264WeightTable;
    flags(arg0: StdVideoEncodeH264WeightTableFlags): StdVideoEncodeH264WeightTable;
    luma_log2_weight_denom(): number;
    luma_log2_weight_denom(arg0: number): StdVideoEncodeH264WeightTable;
    luma_offset_l0(): ByteBuffer;
    luma_offset_l0(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    luma_offset_l0(arg0: number): number;
    luma_offset_l0(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    luma_offset_l1(): ByteBuffer;
    luma_offset_l1(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    luma_offset_l1(arg0: number): number;
    luma_offset_l1(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    luma_weight_l0(): ByteBuffer;
    luma_weight_l0(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    luma_weight_l0(arg0: number): number;
    luma_weight_l0(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    luma_weight_l1(): ByteBuffer;
    luma_weight_l1(arg0: ByteBuffer): StdVideoEncodeH264WeightTable;
    luma_weight_l1(arg0: number): number;
    luma_weight_l1(arg0: number, arg1: number): StdVideoEncodeH264WeightTable;
    set(arg0: StdVideoEncodeH264WeightTable): StdVideoEncodeH264WeightTable;
    set(arg0: StdVideoEncodeH264WeightTableFlags, arg1: number, arg2: number, arg3: ByteBuffer, arg4: ByteBuffer, arg5: ByteBuffer, arg6: ByteBuffer, arg7: ByteBuffer, arg8: ByteBuffer, arg9: ByteBuffer, arg10: ByteBuffer): StdVideoEncodeH264WeightTable;
    sizeof(): number;
}