import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265WeightTableFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265WeightTableFlags.d.ts'
export class StdVideoEncodeH265WeightTable extends Struct<StdVideoEncodeH265WeightTable> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA_CHROMA_LOG2_WEIGHT_DENOM: number;
    static DELTA_CHROMA_OFFSET_L0: number;
    static DELTA_CHROMA_OFFSET_L1: number;
    static DELTA_CHROMA_WEIGHT_L0: number;
    static DELTA_CHROMA_WEIGHT_L1: number;
    static DELTA_LUMA_WEIGHT_L0: number;
    static DELTA_LUMA_WEIGHT_L1: number;
    static FLAGS: number;
    static LUMA_LOG2_WEIGHT_DENOM: number;
    static LUMA_OFFSET_L0: number;
    static LUMA_OFFSET_L1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH265WeightTable;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265WeightTable;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265WeightTable;
    static create(paramarg0: number): StdVideoEncodeH265WeightTable;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265WeightTable;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265WeightTable;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265WeightTable;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndelta_chroma_log2_weight_denom(paramarg0: number): number;
    static ndelta_chroma_log2_weight_denom(paramarg0: number, paramarg1: number): void;
    static ndelta_chroma_offset_l0(paramarg0: number, paramarg1: number): number;
    static ndelta_chroma_offset_l0(paramarg0: number): ByteBuffer;
    static ndelta_chroma_offset_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_chroma_offset_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_chroma_offset_l1(paramarg0: number, paramarg1: number): number;
    static ndelta_chroma_offset_l1(paramarg0: number): ByteBuffer;
    static ndelta_chroma_offset_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_chroma_offset_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_chroma_weight_l0(paramarg0: number, paramarg1: number): number;
    static ndelta_chroma_weight_l0(paramarg0: number): ByteBuffer;
    static ndelta_chroma_weight_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_chroma_weight_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_chroma_weight_l1(paramarg0: number, paramarg1: number): number;
    static ndelta_chroma_weight_l1(paramarg0: number): ByteBuffer;
    static ndelta_chroma_weight_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_chroma_weight_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_luma_weight_l0(paramarg0: number, paramarg1: number): number;
    static ndelta_luma_weight_l0(paramarg0: number): ByteBuffer;
    static ndelta_luma_weight_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_luma_weight_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_luma_weight_l1(paramarg0: number, paramarg1: number): number;
    static ndelta_luma_weight_l1(paramarg0: number): ByteBuffer;
    static ndelta_luma_weight_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_luma_weight_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoEncodeH265WeightTableFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH265WeightTableFlags): void;
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_chroma_log2_weight_denom(): number;
    delta_chroma_log2_weight_denom(arg0: number): StdVideoEncodeH265WeightTable;
    delta_chroma_offset_l0(): ByteBuffer;
    delta_chroma_offset_l0(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_chroma_offset_l0(arg0: number): number;
    delta_chroma_offset_l0(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    delta_chroma_offset_l1(): ByteBuffer;
    delta_chroma_offset_l1(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_chroma_offset_l1(arg0: number): number;
    delta_chroma_offset_l1(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    delta_chroma_weight_l0(): ByteBuffer;
    delta_chroma_weight_l0(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_chroma_weight_l0(arg0: number): number;
    delta_chroma_weight_l0(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    delta_chroma_weight_l1(): ByteBuffer;
    delta_chroma_weight_l1(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_chroma_weight_l1(arg0: number): number;
    delta_chroma_weight_l1(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    delta_luma_weight_l0(): ByteBuffer;
    delta_luma_weight_l0(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_luma_weight_l0(arg0: number): number;
    delta_luma_weight_l0(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    delta_luma_weight_l1(): ByteBuffer;
    delta_luma_weight_l1(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    delta_luma_weight_l1(arg0: number): number;
    delta_luma_weight_l1(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    flags(): StdVideoEncodeH265WeightTableFlags;
    flags(arg0: (param0: StdVideoEncodeH265WeightTableFlags) => void): StdVideoEncodeH265WeightTable;
    flags(arg0: StdVideoEncodeH265WeightTableFlags): StdVideoEncodeH265WeightTable;
    luma_log2_weight_denom(): number;
    luma_log2_weight_denom(arg0: number): StdVideoEncodeH265WeightTable;
    luma_offset_l0(): ByteBuffer;
    luma_offset_l0(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    luma_offset_l0(arg0: number): number;
    luma_offset_l0(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    luma_offset_l1(): ByteBuffer;
    luma_offset_l1(arg0: ByteBuffer): StdVideoEncodeH265WeightTable;
    luma_offset_l1(arg0: number): number;
    luma_offset_l1(arg0: number, arg1: number): StdVideoEncodeH265WeightTable;
    set(arg0: StdVideoEncodeH265WeightTable): StdVideoEncodeH265WeightTable;
    set(arg0: StdVideoEncodeH265WeightTableFlags, arg1: number, arg2: number, arg3: ByteBuffer, arg4: ByteBuffer, arg5: ByteBuffer, arg6: ByteBuffer, arg7: ByteBuffer, arg8: ByteBuffer, arg9: ByteBuffer, arg10: ByteBuffer): StdVideoEncodeH265WeightTable;
    sizeof(): number;
}