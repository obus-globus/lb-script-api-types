import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1CDEF } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1CDEF.d.ts'
import type { StdVideoAV1GlobalMotion } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1GlobalMotion.d.ts'
import type { StdVideoAV1LoopFilter } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1LoopFilter.d.ts'
import type { StdVideoAV1LoopRestoration } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1LoopRestoration.d.ts'
import type { StdVideoAV1Quantization } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1Quantization.d.ts'
import type { StdVideoAV1Segmentation } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1Segmentation.d.ts'
import type { StdVideoAV1TileInfo } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1TileInfo.d.ts'
import type { StdVideoEncodeAV1ExtensionHeader } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1ExtensionHeader.d.ts'
import type { StdVideoEncodeAV1PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1PictureInfoFlags.d.ts'
export class StdVideoEncodeAV1PictureInfo extends Struct<StdVideoEncodeAV1PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CODED_DENOM: number;
    static CURRENT_FRAME_ID: number;
    static DELTA_FRAME_ID_MINUS_1: number;
    static DELTA_LF_RES: number;
    static DELTA_Q_RES: number;
    static FLAGS: number;
    static FRAME_PRESENTATION_TIME: number;
    static FRAME_TYPE: number;
    static INTERPOLATION_FILTER: number;
    static ORDER_HINT: number;
    static PBUFFERREMOVALTIMES: number;
    static PCDEF: number;
    static PEXTENSIONHEADER: number;
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
    static REF_FRAME_IDX: number;
    static REF_ORDER_HINT: number;
    static RENDER_HEIGHT_MINUS_1: number;
    static RENDER_WIDTH_MINUS_1: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static TXMODE: number;
    static calloc(): StdVideoEncodeAV1PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1PictureInfo;
    static create(paramarg0: number): StdVideoEncodeAV1PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nTxMode(paramarg0: number): number;
    static nTxMode(paramarg0: number, paramarg1: number): void;
    static ncoded_denom(paramarg0: number): number;
    static ncoded_denom(paramarg0: number, paramarg1: number): void;
    static ncurrent_frame_id(paramarg0: number): number;
    static ncurrent_frame_id(paramarg0: number, paramarg1: number): void;
    static ndelta_frame_id_minus_1(paramarg0: number, paramarg1: number): number;
    static ndelta_frame_id_minus_1(paramarg0: number): IntBuffer;
    static ndelta_frame_id_minus_1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndelta_frame_id_minus_1(paramarg0: number, paramarg1: IntBuffer): void;
    static ndelta_lf_res(paramarg0: number): number;
    static ndelta_lf_res(paramarg0: number, paramarg1: number): void;
    static ndelta_q_res(paramarg0: number): number;
    static ndelta_q_res(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeAV1PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeAV1PictureInfoFlags): void;
    static nframe_presentation_time(paramarg0: number): number;
    static nframe_presentation_time(paramarg0: number, paramarg1: number): void;
    static nframe_type(paramarg0: number): number;
    static nframe_type(paramarg0: number, paramarg1: number): void;
    static ninterpolation_filter(paramarg0: number): number;
    static ninterpolation_filter(paramarg0: number, paramarg1: number): void;
    static norder_hint(paramarg0: number): number;
    static norder_hint(paramarg0: number, paramarg1: number): void;
    static npBufferRemovalTimes(paramarg0: number, paramarg1: number): IntBuffer;
    static npBufferRemovalTimes(paramarg0: number, paramarg1: IntBuffer): void;
    static npCDEF(paramarg0: number): StdVideoAV1CDEF;
    static npCDEF(paramarg0: number, paramarg1: StdVideoAV1CDEF): void;
    static npExtensionHeader(paramarg0: number): StdVideoEncodeAV1ExtensionHeader;
    static npExtensionHeader(paramarg0: number, paramarg1: StdVideoEncodeAV1ExtensionHeader): void;
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
    static nref_frame_idx(paramarg0: number, paramarg1: number): number;
    static nref_frame_idx(paramarg0: number): ByteBuffer;
    static nref_frame_idx(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nref_frame_idx(paramarg0: number, paramarg1: ByteBuffer): void;
    static nref_order_hint(paramarg0: number, paramarg1: number): number;
    static nref_order_hint(paramarg0: number): ByteBuffer;
    static nref_order_hint(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nref_order_hint(paramarg0: number, paramarg1: ByteBuffer): void;
    static nrefresh_frame_flags(paramarg0: number): number;
    static nrefresh_frame_flags(paramarg0: number, paramarg1: number): void;
    static nrender_height_minus_1(paramarg0: number): number;
    static nrender_height_minus_1(paramarg0: number, paramarg1: number): void;
    static nrender_width_minus_1(paramarg0: number): number;
    static nrender_width_minus_1(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    TxMode(): number;
    TxMode(arg0: number): StdVideoEncodeAV1PictureInfo;
    close(): void;
    coded_denom(): number;
    coded_denom(arg0: number): StdVideoEncodeAV1PictureInfo;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1PictureInfo;
    current_frame_id(): number;
    current_frame_id(arg0: number): StdVideoEncodeAV1PictureInfo;
    delta_frame_id_minus_1(): IntBuffer;
    delta_frame_id_minus_1(arg0: IntBuffer): StdVideoEncodeAV1PictureInfo;
    delta_frame_id_minus_1(arg0: number): number;
    delta_frame_id_minus_1(arg0: number, arg1: number): StdVideoEncodeAV1PictureInfo;
    delta_lf_res(): number;
    delta_lf_res(arg0: number): StdVideoEncodeAV1PictureInfo;
    delta_q_res(): number;
    delta_q_res(arg0: number): StdVideoEncodeAV1PictureInfo;
    flags(): StdVideoEncodeAV1PictureInfoFlags;
    flags(arg0: (param0: StdVideoEncodeAV1PictureInfoFlags) => void): StdVideoEncodeAV1PictureInfo;
    flags(arg0: StdVideoEncodeAV1PictureInfoFlags): StdVideoEncodeAV1PictureInfo;
    frame_presentation_time(): number;
    frame_presentation_time(arg0: number): StdVideoEncodeAV1PictureInfo;
    frame_type(): number;
    frame_type(arg0: number): StdVideoEncodeAV1PictureInfo;
    interpolation_filter(): number;
    interpolation_filter(arg0: number): StdVideoEncodeAV1PictureInfo;
    order_hint(): number;
    order_hint(arg0: number): StdVideoEncodeAV1PictureInfo;
    pBufferRemovalTimes(arg0: IntBuffer): StdVideoEncodeAV1PictureInfo;
    pBufferRemovalTimes(arg0: number): IntBuffer;
    pCDEF(): StdVideoAV1CDEF;
    pCDEF(arg0: StdVideoAV1CDEF): StdVideoEncodeAV1PictureInfo;
    pExtensionHeader(): StdVideoEncodeAV1ExtensionHeader;
    pExtensionHeader(arg0: StdVideoEncodeAV1ExtensionHeader): StdVideoEncodeAV1PictureInfo;
    pGlobalMotion(): StdVideoAV1GlobalMotion;
    pGlobalMotion(arg0: StdVideoAV1GlobalMotion): StdVideoEncodeAV1PictureInfo;
    pLoopFilter(): StdVideoAV1LoopFilter;
    pLoopFilter(arg0: StdVideoAV1LoopFilter): StdVideoEncodeAV1PictureInfo;
    pLoopRestoration(): StdVideoAV1LoopRestoration;
    pLoopRestoration(arg0: StdVideoAV1LoopRestoration): StdVideoEncodeAV1PictureInfo;
    pQuantization(): StdVideoAV1Quantization;
    pQuantization(arg0: StdVideoAV1Quantization): StdVideoEncodeAV1PictureInfo;
    pSegmentation(): StdVideoAV1Segmentation;
    pSegmentation(arg0: StdVideoAV1Segmentation): StdVideoEncodeAV1PictureInfo;
    pTileInfo(): StdVideoAV1TileInfo;
    pTileInfo(arg0: StdVideoAV1TileInfo): StdVideoEncodeAV1PictureInfo;
    primary_ref_frame(): number;
    primary_ref_frame(arg0: number): StdVideoEncodeAV1PictureInfo;
    ref_frame_idx(): ByteBuffer;
    ref_frame_idx(arg0: ByteBuffer): StdVideoEncodeAV1PictureInfo;
    ref_frame_idx(arg0: number): number;
    ref_frame_idx(arg0: number, arg1: number): StdVideoEncodeAV1PictureInfo;
    ref_order_hint(): ByteBuffer;
    ref_order_hint(arg0: ByteBuffer): StdVideoEncodeAV1PictureInfo;
    ref_order_hint(arg0: number): number;
    ref_order_hint(arg0: number, arg1: number): StdVideoEncodeAV1PictureInfo;
    refresh_frame_flags(): number;
    refresh_frame_flags(arg0: number): StdVideoEncodeAV1PictureInfo;
    render_height_minus_1(): number;
    render_height_minus_1(arg0: number): StdVideoEncodeAV1PictureInfo;
    render_width_minus_1(): number;
    render_width_minus_1(arg0: number): StdVideoEncodeAV1PictureInfo;
    set(arg0: StdVideoEncodeAV1PictureInfo): StdVideoEncodeAV1PictureInfo;
    set(arg0: StdVideoEncodeAV1PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: ByteBuffer, arg15: ByteBuffer, arg16: IntBuffer, arg17: StdVideoAV1TileInfo, arg18: StdVideoAV1Quantization, arg19: StdVideoAV1Segmentation, arg20: StdVideoAV1LoopFilter, arg21: StdVideoAV1CDEF, arg22: StdVideoAV1LoopRestoration, arg23: StdVideoAV1GlobalMotion, arg24: StdVideoEncodeAV1ExtensionHeader, arg25: IntBuffer): StdVideoEncodeAV1PictureInfo;
    sizeof(): number;
}