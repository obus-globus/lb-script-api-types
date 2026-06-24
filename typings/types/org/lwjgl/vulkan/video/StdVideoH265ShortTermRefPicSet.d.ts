import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH265ShortTermRefPicSetFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH265ShortTermRefPicSetFlags.d.ts'
export class StdVideoH265ShortTermRefPicSet extends Struct<StdVideoH265ShortTermRefPicSet> implements NativeResource {
    static ABS_DELTA_RPS_MINUS1: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA_IDX_MINUS1: number;
    static DELTA_POC_S0_MINUS1: number;
    static DELTA_POC_S1_MINUS1: number;
    static FLAGS: number;
    static NUM_NEGATIVE_PICS: number;
    static NUM_POSITIVE_PICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static RESERVED2: number;
    static RESERVED3: number;
    static SIZEOF: number;
    static USED_BY_CURR_PIC_FLAG: number;
    static USED_BY_CURR_PIC_S0_FLAG: number;
    static USED_BY_CURR_PIC_S1_FLAG: number;
    static USE_DELTA_FLAG: number;
    static calloc(): StdVideoH265ShortTermRefPicSet;
    static calloc(paramarg0: MemoryStack): StdVideoH265ShortTermRefPicSet;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265ShortTermRefPicSet;
    static create(paramarg0: number): StdVideoH265ShortTermRefPicSet;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265ShortTermRefPicSet;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265ShortTermRefPicSet;
    static malloc(paramarg0: MemoryStack): StdVideoH265ShortTermRefPicSet;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nabs_delta_rps_minus1(paramarg0: number): number;
    static nabs_delta_rps_minus1(paramarg0: number, paramarg1: number): void;
    static ndelta_idx_minus1(paramarg0: number): number;
    static ndelta_idx_minus1(paramarg0: number, paramarg1: number): void;
    static ndelta_poc_s0_minus1(paramarg0: number): ShortBuffer;
    static ndelta_poc_s0_minus1(paramarg0: number, paramarg1: number): number;
    static ndelta_poc_s0_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_poc_s0_minus1(paramarg0: number, paramarg1: ShortBuffer): void;
    static ndelta_poc_s1_minus1(paramarg0: number): ShortBuffer;
    static ndelta_poc_s1_minus1(paramarg0: number, paramarg1: number): number;
    static ndelta_poc_s1_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_poc_s1_minus1(paramarg0: number, paramarg1: ShortBuffer): void;
    static nflags(paramarg0: number): StdVideoH265ShortTermRefPicSetFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH265ShortTermRefPicSetFlags): void;
    static nnum_negative_pics(paramarg0: number): number;
    static nnum_negative_pics(paramarg0: number, paramarg1: number): void;
    static nnum_positive_pics(paramarg0: number): number;
    static nnum_positive_pics(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nreserved2(paramarg0: number): number;
    static nreserved2(paramarg0: number, paramarg1: number): void;
    static nreserved3(paramarg0: number): number;
    static nreserved3(paramarg0: number, paramarg1: number): void;
    static nuse_delta_flag(paramarg0: number): number;
    static nuse_delta_flag(paramarg0: number, paramarg1: number): void;
    static nused_by_curr_pic_flag(paramarg0: number): number;
    static nused_by_curr_pic_flag(paramarg0: number, paramarg1: number): void;
    static nused_by_curr_pic_s0_flag(paramarg0: number): number;
    static nused_by_curr_pic_s0_flag(paramarg0: number, paramarg1: number): void;
    static nused_by_curr_pic_s1_flag(paramarg0: number): number;
    static nused_by_curr_pic_s1_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    abs_delta_rps_minus1(): number;
    abs_delta_rps_minus1(arg0: number): StdVideoH265ShortTermRefPicSet;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265ShortTermRefPicSet;
    delta_idx_minus1(): number;
    delta_idx_minus1(arg0: number): StdVideoH265ShortTermRefPicSet;
    delta_poc_s0_minus1(): ShortBuffer;
    delta_poc_s0_minus1(arg0: ShortBuffer): StdVideoH265ShortTermRefPicSet;
    delta_poc_s0_minus1(arg0: number): number;
    delta_poc_s0_minus1(arg0: number, arg1: number): StdVideoH265ShortTermRefPicSet;
    delta_poc_s1_minus1(): ShortBuffer;
    delta_poc_s1_minus1(arg0: ShortBuffer): StdVideoH265ShortTermRefPicSet;
    delta_poc_s1_minus1(arg0: number): number;
    delta_poc_s1_minus1(arg0: number, arg1: number): StdVideoH265ShortTermRefPicSet;
    flags(): StdVideoH265ShortTermRefPicSetFlags;
    flags(arg0: (param0: StdVideoH265ShortTermRefPicSetFlags) => void): StdVideoH265ShortTermRefPicSet;
    flags(arg0: StdVideoH265ShortTermRefPicSetFlags): StdVideoH265ShortTermRefPicSet;
    num_negative_pics(): number;
    num_negative_pics(arg0: number): StdVideoH265ShortTermRefPicSet;
    num_positive_pics(): number;
    num_positive_pics(arg0: number): StdVideoH265ShortTermRefPicSet;
    set(arg0: StdVideoH265ShortTermRefPicSet): StdVideoH265ShortTermRefPicSet;
    set(arg0: StdVideoH265ShortTermRefPicSetFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ShortBuffer, arg10: ShortBuffer): StdVideoH265ShortTermRefPicSet;
    sizeof(): number;
    use_delta_flag(): number;
    use_delta_flag(arg0: number): StdVideoH265ShortTermRefPicSet;
    used_by_curr_pic_flag(): number;
    used_by_curr_pic_flag(arg0: number): StdVideoH265ShortTermRefPicSet;
    used_by_curr_pic_s0_flag(): number;
    used_by_curr_pic_s0_flag(arg0: number): StdVideoH265ShortTermRefPicSet;
    used_by_curr_pic_s1_flag(): number;
    used_by_curr_pic_s1_flag(arg0: number): StdVideoH265ShortTermRefPicSet;
}