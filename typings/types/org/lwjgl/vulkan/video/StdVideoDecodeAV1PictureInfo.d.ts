import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1CDEF } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1CDEF.d.ts'
import type { StdVideoAV1FilmGrain } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1FilmGrain.d.ts'
import type { StdVideoAV1GlobalMotion } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1GlobalMotion.d.ts'
import type { StdVideoAV1LoopFilter } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1LoopFilter.d.ts'
import type { StdVideoAV1LoopRestoration } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1LoopRestoration.d.ts'
import type { StdVideoAV1Quantization } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1Quantization.d.ts'
import type { StdVideoAV1Segmentation } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1Segmentation.d.ts'
import type { StdVideoAV1TileInfo } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1TileInfo.d.ts'
import type { StdVideoDecodeAV1PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeAV1PictureInfoFlags.d.ts'
export class StdVideoDecodeAV1PictureInfo extends Struct<StdVideoDecodeAV1PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CODED_DENOM: number;
    static CURRENT_FRAME_ID: number;
    static DELTA_LF_RES: number;
    static DELTA_Q_RES: number;
    static EXPECTEDFRAMEID: number;
    static FLAGS: number;
    static FRAME_TYPE: number;
    static INTERPOLATION_FILTER: number;
    static ORDERHINT: number;
    static ORDERHINTS: number;
    static PCDEF: number;
    static PFILMGRAIN: number;
    static PGLOBALMOTION: number;
    static PLOOPFILTER: number;
    static PLOOPRESTORATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUANTIZATION: number;
    static PRIMARY_REF_FRAME: number;
    static PSEGMENTATION: number;
    static PTILEINFO: number;
    static REFRESH_FRAME_FLAGS: number;
    static RESERVED1: number;
    static RESERVED2: number;
    static SIZEOF: number;
    static SKIPMODEFRAME: number;
    static TXMODE: number;
    static calloc(): StdVideoDecodeAV1PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeAV1PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeAV1PictureInfo;
    static create(paramarg0: number): StdVideoDecodeAV1PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeAV1PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeAV1PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeAV1PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nOrderHint(paramarg0: number): number;
    static nOrderHint(paramarg0: number, paramarg1: number): void;
    static nOrderHints(paramarg0: number, paramarg1: number): number;
    static nOrderHints(paramarg0: number): ByteBuffer;
    static nOrderHints(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nOrderHints(paramarg0: number, paramarg1: ByteBuffer): void;
    static nSkipModeFrame(paramarg0: number, paramarg1: number): number;
    static nSkipModeFrame(paramarg0: number): ByteBuffer;
    static nSkipModeFrame(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nSkipModeFrame(paramarg0: number, paramarg1: ByteBuffer): void;
    static nTxMode(paramarg0: number): number;
    static nTxMode(paramarg0: number, paramarg1: number): void;
    static ncoded_denom(paramarg0: number): number;
    static ncoded_denom(paramarg0: number, paramarg1: number): void;
    static ncurrent_frame_id(paramarg0: number): number;
    static ncurrent_frame_id(paramarg0: number, paramarg1: number): void;
    static ndelta_lf_res(paramarg0: number): number;
    static ndelta_lf_res(paramarg0: number, paramarg1: number): void;
    static ndelta_q_res(paramarg0: number): number;
    static ndelta_q_res(paramarg0: number, paramarg1: number): void;
    static nexpectedFrameId(paramarg0: number, paramarg1: number): number;
    static nexpectedFrameId(paramarg0: number): IntBuffer;
    static nexpectedFrameId(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nexpectedFrameId(paramarg0: number, paramarg1: IntBuffer): void;
    static nflags(paramarg0: number): StdVideoDecodeAV1PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeAV1PictureInfoFlags): void;
    static nframe_type(paramarg0: number): number;
    static nframe_type(paramarg0: number, paramarg1: number): void;
    static ninterpolation_filter(paramarg0: number): number;
    static ninterpolation_filter(paramarg0: number, paramarg1: number): void;
    static npCDEF(paramarg0: number): StdVideoAV1CDEF;
    static npCDEF(paramarg0: number, paramarg1: StdVideoAV1CDEF): void;
    static npFilmGrain(paramarg0: number): StdVideoAV1FilmGrain;
    static npFilmGrain(paramarg0: number, paramarg1: StdVideoAV1FilmGrain): void;
    static npGlobalMotion(paramarg0: number): StdVideoAV1GlobalMotion;
    static npGlobalMotion(paramarg0: number, paramarg1: StdVideoAV1GlobalMotion): void;
    static npLoopFilter(paramarg0: number): StdVideoAV1LoopFilter;
    static npLoopFilter(paramarg0: number, paramarg1: StdVideoAV1LoopFilter): void;
    static npLoopRestoration(paramarg0: number): StdVideoAV1LoopRestoration;
    static npLoopRestoration(paramarg0: number, paramarg1: StdVideoAV1LoopRestoration): void;
    static npQuantization(paramarg0: number): StdVideoAV1Quantization;
    static npQuantization(paramarg0: number, paramarg1: StdVideoAV1Quantization): void;
    static npSegmentation(paramarg0: number): StdVideoAV1Segmentation;
    static npSegmentation(paramarg0: number, paramarg1: StdVideoAV1Segmentation): void;
    static npTileInfo(paramarg0: number): StdVideoAV1TileInfo;
    static npTileInfo(paramarg0: number, paramarg1: StdVideoAV1TileInfo): void;
    static nprimary_ref_frame(paramarg0: number): number;
    static nprimary_ref_frame(paramarg0: number, paramarg1: number): void;
    static nrefresh_frame_flags(paramarg0: number): number;
    static nrefresh_frame_flags(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nreserved2(paramarg0: number, paramarg1: number): number;
    static nreserved2(paramarg0: number): ByteBuffer;
    static nreserved2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved2(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    OrderHint(): number;
    OrderHint(arg0: number): StdVideoDecodeAV1PictureInfo;
    OrderHints(): ByteBuffer;
    OrderHints(arg0: ByteBuffer): StdVideoDecodeAV1PictureInfo;
    OrderHints(arg0: number): number;
    OrderHints(arg0: number, arg1: number): StdVideoDecodeAV1PictureInfo;
    SkipModeFrame(): ByteBuffer;
    SkipModeFrame(arg0: ByteBuffer): StdVideoDecodeAV1PictureInfo;
    SkipModeFrame(arg0: number): number;
    SkipModeFrame(arg0: number, arg1: number): StdVideoDecodeAV1PictureInfo;
    TxMode(): number;
    TxMode(arg0: number): StdVideoDecodeAV1PictureInfo;
    close(): void;
    coded_denom(): number;
    coded_denom(arg0: number): StdVideoDecodeAV1PictureInfo;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeAV1PictureInfo;
    current_frame_id(): number;
    current_frame_id(arg0: number): StdVideoDecodeAV1PictureInfo;
    delta_lf_res(): number;
    delta_lf_res(arg0: number): StdVideoDecodeAV1PictureInfo;
    delta_q_res(): number;
    delta_q_res(arg0: number): StdVideoDecodeAV1PictureInfo;
    expectedFrameId(): IntBuffer;
    expectedFrameId(arg0: IntBuffer): StdVideoDecodeAV1PictureInfo;
    expectedFrameId(arg0: number): number;
    expectedFrameId(arg0: number, arg1: number): StdVideoDecodeAV1PictureInfo;
    flags(): StdVideoDecodeAV1PictureInfoFlags;
    flags(arg0: (param0: StdVideoDecodeAV1PictureInfoFlags) => void): StdVideoDecodeAV1PictureInfo;
    flags(arg0: StdVideoDecodeAV1PictureInfoFlags): StdVideoDecodeAV1PictureInfo;
    frame_type(): number;
    frame_type(arg0: number): StdVideoDecodeAV1PictureInfo;
    interpolation_filter(): number;
    interpolation_filter(arg0: number): StdVideoDecodeAV1PictureInfo;
    pCDEF(): StdVideoAV1CDEF;
    pCDEF(arg0: StdVideoAV1CDEF): StdVideoDecodeAV1PictureInfo;
    pFilmGrain(): StdVideoAV1FilmGrain;
    pFilmGrain(arg0: StdVideoAV1FilmGrain): StdVideoDecodeAV1PictureInfo;
    pGlobalMotion(): StdVideoAV1GlobalMotion;
    pGlobalMotion(arg0: StdVideoAV1GlobalMotion): StdVideoDecodeAV1PictureInfo;
    pLoopFilter(): StdVideoAV1LoopFilter;
    pLoopFilter(arg0: StdVideoAV1LoopFilter): StdVideoDecodeAV1PictureInfo;
    pLoopRestoration(): StdVideoAV1LoopRestoration;
    pLoopRestoration(arg0: StdVideoAV1LoopRestoration): StdVideoDecodeAV1PictureInfo;
    pQuantization(): StdVideoAV1Quantization;
    pQuantization(arg0: StdVideoAV1Quantization): StdVideoDecodeAV1PictureInfo;
    pSegmentation(): StdVideoAV1Segmentation;
    pSegmentation(arg0: StdVideoAV1Segmentation): StdVideoDecodeAV1PictureInfo;
    pTileInfo(): StdVideoAV1TileInfo;
    pTileInfo(arg0: StdVideoAV1TileInfo): StdVideoDecodeAV1PictureInfo;
    primary_ref_frame(): number;
    primary_ref_frame(arg0: number): StdVideoDecodeAV1PictureInfo;
    refresh_frame_flags(): number;
    refresh_frame_flags(arg0: number): StdVideoDecodeAV1PictureInfo;
    set(arg0: StdVideoDecodeAV1PictureInfo): StdVideoDecodeAV1PictureInfo;
    set(arg0: StdVideoDecodeAV1PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: ByteBuffer, arg11: number, arg12: ByteBuffer, arg13: IntBuffer, arg14: StdVideoAV1TileInfo, arg15: StdVideoAV1Quantization, arg16: StdVideoAV1Segmentation, arg17: StdVideoAV1LoopFilter, arg18: StdVideoAV1CDEF, arg19: StdVideoAV1LoopRestoration, arg20: StdVideoAV1GlobalMotion, arg21: StdVideoAV1FilmGrain): StdVideoDecodeAV1PictureInfo;
    sizeof(): number;
}