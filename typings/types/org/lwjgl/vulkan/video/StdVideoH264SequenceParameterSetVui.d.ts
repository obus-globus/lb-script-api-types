import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH264HrdParameters } from '../../../../org/lwjgl/vulkan/video/StdVideoH264HrdParameters.d.ts'
import type { StdVideoH264SpsVuiFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH264SpsVuiFlags.d.ts'
export class StdVideoH264SequenceParameterSetVui extends Struct<StdVideoH264SequenceParameterSetVui> implements NativeResource {
    static ALIGNOF: number;
    static ASPECT_RATIO_IDC: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMA_SAMPLE_LOC_TYPE_BOTTOM_FIELD: number;
    static CHROMA_SAMPLE_LOC_TYPE_TOP_FIELD: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOUR_PRIMARIES: number;
    static FLAGS: number;
    static MATRIX_COEFFICIENTS: number;
    static MAX_DEC_FRAME_BUFFERING: number;
    static MAX_NUM_REORDER_FRAMES: number;
    static NUM_UNITS_IN_TICK: number;
    static PHRDPARAMETERS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static SAR_HEIGHT: number;
    static SAR_WIDTH: number;
    static SIZEOF: number;
    static TIME_SCALE: number;
    static TRANSFER_CHARACTERISTICS: number;
    static VIDEO_FORMAT: number;
    static calloc(): StdVideoH264SequenceParameterSetVui;
    static calloc(paramarg0: MemoryStack): StdVideoH264SequenceParameterSetVui;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264SequenceParameterSetVui;
    static create(paramarg0: number): StdVideoH264SequenceParameterSetVui;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264SequenceParameterSetVui;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264SequenceParameterSetVui;
    static malloc(paramarg0: MemoryStack): StdVideoH264SequenceParameterSetVui;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspect_ratio_idc(paramarg0: number): number;
    static naspect_ratio_idc(paramarg0: number, paramarg1: number): void;
    static nchroma_sample_loc_type_bottom_field(paramarg0: number): number;
    static nchroma_sample_loc_type_bottom_field(paramarg0: number, paramarg1: number): void;
    static nchroma_sample_loc_type_top_field(paramarg0: number): number;
    static nchroma_sample_loc_type_top_field(paramarg0: number, paramarg1: number): void;
    static ncolour_primaries(paramarg0: number): number;
    static ncolour_primaries(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoH264SpsVuiFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH264SpsVuiFlags): void;
    static nmatrix_coefficients(paramarg0: number): number;
    static nmatrix_coefficients(paramarg0: number, paramarg1: number): void;
    static nmax_dec_frame_buffering(paramarg0: number): number;
    static nmax_dec_frame_buffering(paramarg0: number, paramarg1: number): void;
    static nmax_num_reorder_frames(paramarg0: number): number;
    static nmax_num_reorder_frames(paramarg0: number, paramarg1: number): void;
    static nnum_units_in_tick(paramarg0: number): number;
    static nnum_units_in_tick(paramarg0: number, paramarg1: number): void;
    static npHrdParameters(paramarg0: number): StdVideoH264HrdParameters;
    static npHrdParameters(paramarg0: number, paramarg1: StdVideoH264HrdParameters): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nsar_height(paramarg0: number): number;
    static nsar_height(paramarg0: number, paramarg1: number): void;
    static nsar_width(paramarg0: number): number;
    static nsar_width(paramarg0: number, paramarg1: number): void;
    static ntime_scale(paramarg0: number): number;
    static ntime_scale(paramarg0: number, paramarg1: number): void;
    static ntransfer_characteristics(paramarg0: number): number;
    static ntransfer_characteristics(paramarg0: number, paramarg1: number): void;
    static nvideo_format(paramarg0: number): number;
    static nvideo_format(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspect_ratio_idc(): number;
    aspect_ratio_idc(arg0: number): StdVideoH264SequenceParameterSetVui;
    chroma_sample_loc_type_bottom_field(): number;
    chroma_sample_loc_type_bottom_field(arg0: number): StdVideoH264SequenceParameterSetVui;
    chroma_sample_loc_type_top_field(): number;
    chroma_sample_loc_type_top_field(arg0: number): StdVideoH264SequenceParameterSetVui;
    close(): void;
    colour_primaries(): number;
    colour_primaries(arg0: number): StdVideoH264SequenceParameterSetVui;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264SequenceParameterSetVui;
    flags(): StdVideoH264SpsVuiFlags;
    flags(arg0: (param0: StdVideoH264SpsVuiFlags) => void): StdVideoH264SequenceParameterSetVui;
    flags(arg0: StdVideoH264SpsVuiFlags): StdVideoH264SequenceParameterSetVui;
    matrix_coefficients(): number;
    matrix_coefficients(arg0: number): StdVideoH264SequenceParameterSetVui;
    max_dec_frame_buffering(): number;
    max_dec_frame_buffering(arg0: number): StdVideoH264SequenceParameterSetVui;
    max_num_reorder_frames(): number;
    max_num_reorder_frames(arg0: number): StdVideoH264SequenceParameterSetVui;
    num_units_in_tick(): number;
    num_units_in_tick(arg0: number): StdVideoH264SequenceParameterSetVui;
    pHrdParameters(): StdVideoH264HrdParameters;
    pHrdParameters(arg0: StdVideoH264HrdParameters): StdVideoH264SequenceParameterSetVui;
    sar_height(): number;
    sar_height(arg0: number): StdVideoH264SequenceParameterSetVui;
    sar_width(): number;
    sar_width(arg0: number): StdVideoH264SequenceParameterSetVui;
    set(arg0: StdVideoH264SequenceParameterSetVui): StdVideoH264SequenceParameterSetVui;
    set(arg0: StdVideoH264SpsVuiFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: StdVideoH264HrdParameters): StdVideoH264SequenceParameterSetVui;
    sizeof(): number;
    time_scale(): number;
    time_scale(arg0: number): StdVideoH264SequenceParameterSetVui;
    transfer_characteristics(): number;
    transfer_characteristics(arg0: number): StdVideoH264SequenceParameterSetVui;
    video_format(): number;
    video_format(arg0: number): StdVideoH264SequenceParameterSetVui;
}