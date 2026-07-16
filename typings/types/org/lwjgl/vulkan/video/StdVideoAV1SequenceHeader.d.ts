import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1ColorConfig } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1ColorConfig.d.ts'
import type { StdVideoAV1SequenceHeaderFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1SequenceHeaderFlags.d.ts'
import type { StdVideoAV1TimingInfo } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1TimingInfo.d.ts'
export class StdVideoAV1SequenceHeader extends Struct<StdVideoAV1SequenceHeader> implements NativeResource {
    static ADDITIONAL_FRAME_ID_LENGTH_MINUS_1: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA_FRAME_ID_LENGTH_MINUS_2: number;
    static FLAGS: number;
    static FRAME_HEIGHT_BITS_MINUS_1: number;
    static FRAME_WIDTH_BITS_MINUS_1: number;
    static MAX_FRAME_HEIGHT_MINUS_1: number;
    static MAX_FRAME_WIDTH_MINUS_1: number;
    static ORDER_HINT_BITS_MINUS_1: number;
    static PCOLORCONFIG: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTIMINGINFO: number;
    static RESERVED1: number;
    static SEQ_FORCE_INTEGER_MV: number;
    static SEQ_FORCE_SCREEN_CONTENT_TOOLS: number;
    static SEQ_PROFILE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1SequenceHeader;
    static calloc(paramarg0: MemoryStack): StdVideoAV1SequenceHeader;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1SequenceHeader;
    static create(paramarg0: number): StdVideoAV1SequenceHeader;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1SequenceHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1SequenceHeader;
    static malloc(paramarg0: MemoryStack): StdVideoAV1SequenceHeader;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nadditional_frame_id_length_minus_1(paramarg0: number): number;
    static nadditional_frame_id_length_minus_1(paramarg0: number, paramarg1: number): void;
    static ndelta_frame_id_length_minus_2(paramarg0: number): number;
    static ndelta_frame_id_length_minus_2(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoAV1SequenceHeaderFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1SequenceHeaderFlags): void;
    static nframe_height_bits_minus_1(paramarg0: number): number;
    static nframe_height_bits_minus_1(paramarg0: number, paramarg1: number): void;
    static nframe_width_bits_minus_1(paramarg0: number): number;
    static nframe_width_bits_minus_1(paramarg0: number, paramarg1: number): void;
    static nmax_frame_height_minus_1(paramarg0: number): number;
    static nmax_frame_height_minus_1(paramarg0: number, paramarg1: number): void;
    static nmax_frame_width_minus_1(paramarg0: number): number;
    static nmax_frame_width_minus_1(paramarg0: number, paramarg1: number): void;
    static norder_hint_bits_minus_1(paramarg0: number): number;
    static norder_hint_bits_minus_1(paramarg0: number, paramarg1: number): void;
    static npColorConfig(paramarg0: number): StdVideoAV1ColorConfig;
    static npColorConfig(paramarg0: number, paramarg1: StdVideoAV1ColorConfig): void;
    static npTimingInfo(paramarg0: number): StdVideoAV1TimingInfo;
    static npTimingInfo(paramarg0: number, paramarg1: StdVideoAV1TimingInfo): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nseq_force_integer_mv(paramarg0: number): number;
    static nseq_force_integer_mv(paramarg0: number, paramarg1: number): void;
    static nseq_force_screen_content_tools(paramarg0: number): number;
    static nseq_force_screen_content_tools(paramarg0: number, paramarg1: number): void;
    static nseq_profile(paramarg0: number): number;
    static nseq_profile(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    additional_frame_id_length_minus_1(): number;
    additional_frame_id_length_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1SequenceHeader;
    delta_frame_id_length_minus_2(): number;
    delta_frame_id_length_minus_2(arg0: number): StdVideoAV1SequenceHeader;
    flags(): StdVideoAV1SequenceHeaderFlags;
    flags(arg0: (param0: StdVideoAV1SequenceHeaderFlags) => void): StdVideoAV1SequenceHeader;
    flags(arg0: StdVideoAV1SequenceHeaderFlags): StdVideoAV1SequenceHeader;
    frame_height_bits_minus_1(): number;
    frame_height_bits_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    frame_width_bits_minus_1(): number;
    frame_width_bits_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    max_frame_height_minus_1(): number;
    max_frame_height_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    max_frame_width_minus_1(): number;
    max_frame_width_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    order_hint_bits_minus_1(): number;
    order_hint_bits_minus_1(arg0: number): StdVideoAV1SequenceHeader;
    pColorConfig(): StdVideoAV1ColorConfig;
    pColorConfig(arg0: StdVideoAV1ColorConfig): StdVideoAV1SequenceHeader;
    pTimingInfo(): StdVideoAV1TimingInfo;
    pTimingInfo(arg0: StdVideoAV1TimingInfo): StdVideoAV1SequenceHeader;
    seq_force_integer_mv(): number;
    seq_force_integer_mv(arg0: number): StdVideoAV1SequenceHeader;
    seq_force_screen_content_tools(): number;
    seq_force_screen_content_tools(arg0: number): StdVideoAV1SequenceHeader;
    seq_profile(): number;
    seq_profile(arg0: number): StdVideoAV1SequenceHeader;
    set(arg0: StdVideoAV1SequenceHeader): StdVideoAV1SequenceHeader;
    set(arg0: StdVideoAV1SequenceHeaderFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: StdVideoAV1ColorConfig, arg12: StdVideoAV1TimingInfo): StdVideoAV1SequenceHeader;
    sizeof(): number;
}