import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeVP9PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeVP9PictureInfoFlags.d.ts'
import type { StdVideoVP9ColorConfig } from '../../../../org/lwjgl/vulkan/video/StdVideoVP9ColorConfig.d.ts'
import type { StdVideoVP9LoopFilter } from '../../../../org/lwjgl/vulkan/video/StdVideoVP9LoopFilter.d.ts'
import type { StdVideoVP9Segmentation } from '../../../../org/lwjgl/vulkan/video/StdVideoVP9Segmentation.d.ts'
export class StdVideoDecodeVP9PictureInfo extends Struct<StdVideoDecodeVP9PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BASE_Q_IDX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA_Q_UV_AC: number;
    static DELTA_Q_UV_DC: number;
    static DELTA_Q_Y_DC: number;
    static FLAGS: number;
    static FRAME_CONTEXT_IDX: number;
    static FRAME_TYPE: number;
    static INTERPOLATION_FILTER: number;
    static PCOLORCONFIG: number;
    static PLOOPFILTER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PROFILE: number;
    static PSEGMENTATION: number;
    static REFRESH_FRAME_FLAGS: number;
    static REF_FRAME_SIGN_BIAS_MASK: number;
    static RESERVED1: number;
    static RESET_FRAME_CONTEXT: number;
    static SIZEOF: number;
    static TILE_COLS_LOG2: number;
    static TILE_ROWS_LOG2: number;
    static calloc(): StdVideoDecodeVP9PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeVP9PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeVP9PictureInfo;
    static create(paramarg0: number): StdVideoDecodeVP9PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeVP9PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeVP9PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeVP9PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbase_q_idx(paramarg0: number): number;
    static nbase_q_idx(paramarg0: number, paramarg1: number): void;
    static ndelta_q_uv_ac(paramarg0: number): number;
    static ndelta_q_uv_ac(paramarg0: number, paramarg1: number): void;
    static ndelta_q_uv_dc(paramarg0: number): number;
    static ndelta_q_uv_dc(paramarg0: number, paramarg1: number): void;
    static ndelta_q_y_dc(paramarg0: number): number;
    static ndelta_q_y_dc(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoDecodeVP9PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeVP9PictureInfoFlags): void;
    static nframe_context_idx(paramarg0: number): number;
    static nframe_context_idx(paramarg0: number, paramarg1: number): void;
    static nframe_type(paramarg0: number): number;
    static nframe_type(paramarg0: number, paramarg1: number): void;
    static ninterpolation_filter(paramarg0: number): number;
    static ninterpolation_filter(paramarg0: number, paramarg1: number): void;
    static npColorConfig(paramarg0: number): StdVideoVP9ColorConfig;
    static npColorConfig(paramarg0: number, paramarg1: StdVideoVP9ColorConfig): void;
    static npLoopFilter(paramarg0: number): StdVideoVP9LoopFilter;
    static npLoopFilter(paramarg0: number, paramarg1: StdVideoVP9LoopFilter): void;
    static npSegmentation(paramarg0: number): StdVideoVP9Segmentation;
    static npSegmentation(paramarg0: number, paramarg1: StdVideoVP9Segmentation): void;
    static nprofile(paramarg0: number): number;
    static nprofile(paramarg0: number, paramarg1: number): void;
    static nref_frame_sign_bias_mask(paramarg0: number): number;
    static nref_frame_sign_bias_mask(paramarg0: number, paramarg1: number): void;
    static nrefresh_frame_flags(paramarg0: number): number;
    static nrefresh_frame_flags(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): ShortBuffer;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ShortBuffer): void;
    static nreset_frame_context(paramarg0: number): number;
    static nreset_frame_context(paramarg0: number, paramarg1: number): void;
    static ntile_cols_log2(paramarg0: number): number;
    static ntile_cols_log2(paramarg0: number, paramarg1: number): void;
    static ntile_rows_log2(paramarg0: number): number;
    static ntile_rows_log2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    base_q_idx(): number;
    base_q_idx(arg0: number): StdVideoDecodeVP9PictureInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeVP9PictureInfo;
    delta_q_uv_ac(): number;
    delta_q_uv_ac(arg0: number): StdVideoDecodeVP9PictureInfo;
    delta_q_uv_dc(): number;
    delta_q_uv_dc(arg0: number): StdVideoDecodeVP9PictureInfo;
    delta_q_y_dc(): number;
    delta_q_y_dc(arg0: number): StdVideoDecodeVP9PictureInfo;
    flags(): StdVideoDecodeVP9PictureInfoFlags;
    flags(arg0: (param0: StdVideoDecodeVP9PictureInfoFlags) => void): StdVideoDecodeVP9PictureInfo;
    flags(arg0: StdVideoDecodeVP9PictureInfoFlags): StdVideoDecodeVP9PictureInfo;
    frame_context_idx(): number;
    frame_context_idx(arg0: number): StdVideoDecodeVP9PictureInfo;
    frame_type(): number;
    frame_type(arg0: number): StdVideoDecodeVP9PictureInfo;
    interpolation_filter(): number;
    interpolation_filter(arg0: number): StdVideoDecodeVP9PictureInfo;
    pColorConfig(): StdVideoVP9ColorConfig;
    pColorConfig(arg0: StdVideoVP9ColorConfig): StdVideoDecodeVP9PictureInfo;
    pLoopFilter(): StdVideoVP9LoopFilter;
    pLoopFilter(arg0: StdVideoVP9LoopFilter): StdVideoDecodeVP9PictureInfo;
    pSegmentation(): StdVideoVP9Segmentation;
    pSegmentation(arg0: StdVideoVP9Segmentation): StdVideoDecodeVP9PictureInfo;
    profile(): number;
    profile(arg0: number): StdVideoDecodeVP9PictureInfo;
    ref_frame_sign_bias_mask(): number;
    ref_frame_sign_bias_mask(arg0: number): StdVideoDecodeVP9PictureInfo;
    refresh_frame_flags(): number;
    refresh_frame_flags(arg0: number): StdVideoDecodeVP9PictureInfo;
    reset_frame_context(): number;
    reset_frame_context(arg0: number): StdVideoDecodeVP9PictureInfo;
    set(arg0: StdVideoDecodeVP9PictureInfo): StdVideoDecodeVP9PictureInfo;
    set(arg0: StdVideoDecodeVP9PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: StdVideoVP9ColorConfig, arg15: StdVideoVP9LoopFilter, arg16: StdVideoVP9Segmentation): StdVideoDecodeVP9PictureInfo;
    sizeof(): number;
    tile_cols_log2(): number;
    tile_cols_log2(arg0: number): StdVideoDecodeVP9PictureInfo;
    tile_rows_log2(): number;
    tile_rows_log2(arg0: number): StdVideoDecodeVP9PictureInfo;
}