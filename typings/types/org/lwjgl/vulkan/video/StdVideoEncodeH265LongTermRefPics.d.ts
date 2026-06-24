import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH265LongTermRefPics extends Struct<StdVideoEncodeH265LongTermRefPics> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA_POC_MSB_CYCLE_LT: number;
    static DELTA_POC_MSB_PRESENT_FLAG: number;
    static LT_IDX_SPS: number;
    static NUM_LONG_TERM_PICS: number;
    static NUM_LONG_TERM_SPS: number;
    static POC_LSB_LT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static USED_BY_CURR_PIC_LT_FLAG: number;
    static calloc(): StdVideoEncodeH265LongTermRefPics;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265LongTermRefPics;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265LongTermRefPics;
    static create(paramarg0: number): StdVideoEncodeH265LongTermRefPics;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265LongTermRefPics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265LongTermRefPics;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265LongTermRefPics;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndelta_poc_msb_cycle_lt(paramarg0: number, paramarg1: number): number;
    static ndelta_poc_msb_cycle_lt(paramarg0: number): ByteBuffer;
    static ndelta_poc_msb_cycle_lt(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_poc_msb_cycle_lt(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndelta_poc_msb_present_flag(paramarg0: number, paramarg1: number): number;
    static ndelta_poc_msb_present_flag(paramarg0: number): ByteBuffer;
    static ndelta_poc_msb_present_flag(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_poc_msb_present_flag(paramarg0: number, paramarg1: ByteBuffer): void;
    static nlt_idx_sps(paramarg0: number, paramarg1: number): number;
    static nlt_idx_sps(paramarg0: number): ByteBuffer;
    static nlt_idx_sps(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nlt_idx_sps(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnum_long_term_pics(paramarg0: number): number;
    static nnum_long_term_pics(paramarg0: number, paramarg1: number): void;
    static nnum_long_term_sps(paramarg0: number): number;
    static nnum_long_term_sps(paramarg0: number, paramarg1: number): void;
    static npoc_lsb_lt(paramarg0: number, paramarg1: number): number;
    static npoc_lsb_lt(paramarg0: number): ByteBuffer;
    static npoc_lsb_lt(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npoc_lsb_lt(paramarg0: number, paramarg1: ByteBuffer): void;
    static nused_by_curr_pic_lt_flag(paramarg0: number): number;
    static nused_by_curr_pic_lt_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    delta_poc_msb_cycle_lt(): ByteBuffer;
    delta_poc_msb_cycle_lt(arg0: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    delta_poc_msb_cycle_lt(arg0: number): number;
    delta_poc_msb_cycle_lt(arg0: number, arg1: number): StdVideoEncodeH265LongTermRefPics;
    delta_poc_msb_present_flag(): ByteBuffer;
    delta_poc_msb_present_flag(arg0: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    delta_poc_msb_present_flag(arg0: number): number;
    delta_poc_msb_present_flag(arg0: number, arg1: number): StdVideoEncodeH265LongTermRefPics;
    lt_idx_sps(): ByteBuffer;
    lt_idx_sps(arg0: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    lt_idx_sps(arg0: number): number;
    lt_idx_sps(arg0: number, arg1: number): StdVideoEncodeH265LongTermRefPics;
    num_long_term_pics(): number;
    num_long_term_pics(arg0: number): StdVideoEncodeH265LongTermRefPics;
    num_long_term_sps(): number;
    num_long_term_sps(arg0: number): StdVideoEncodeH265LongTermRefPics;
    poc_lsb_lt(): ByteBuffer;
    poc_lsb_lt(arg0: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    poc_lsb_lt(arg0: number): number;
    poc_lsb_lt(arg0: number, arg1: number): StdVideoEncodeH265LongTermRefPics;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: ByteBuffer, arg4: number, arg5: ByteBuffer, arg6: ByteBuffer): StdVideoEncodeH265LongTermRefPics;
    set(arg0: StdVideoEncodeH265LongTermRefPics): StdVideoEncodeH265LongTermRefPics;
    sizeof(): number;
    used_by_curr_pic_lt_flag(): number;
    used_by_curr_pic_lt_flag(arg0: number): StdVideoEncodeH265LongTermRefPics;
}