import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265LongTermRefPics } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265LongTermRefPics.d.ts'
import type { StdVideoEncodeH265PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265PictureInfoFlags.d.ts'
import type { StdVideoEncodeH265ReferenceModifications } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265ReferenceModifications.d.ts'
import type { StdVideoH265ShortTermRefPicSet } from '../../../../org/lwjgl/vulkan/video/StdVideoH265ShortTermRefPicSet.d.ts'
export class StdVideoEncodeH265PictureInfo extends Struct<StdVideoEncodeH265PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PICORDERCNTVAL: number;
    static PIC_TYPE: number;
    static PLONGTERMREFPICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPS_PIC_PARAMETER_SET_ID: number;
    static PPS_SEQ_PARAMETER_SET_ID: number;
    static PREFLISTS: number;
    static PSHORTTERMREFPICSET: number;
    static RESERVED1: number;
    static SHORT_TERM_REF_PIC_SET_IDX: number;
    static SIZEOF: number;
    static SPS_VIDEO_PARAMETER_SET_ID: number;
    static TEMPORALID: number;
    static calloc(): StdVideoEncodeH265PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265PictureInfo;
    static create(paramarg0: number): StdVideoEncodeH265PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPicOrderCntVal(paramarg0: number): number;
    static nPicOrderCntVal(paramarg0: number, paramarg1: number): void;
    static nTemporalId(paramarg0: number): number;
    static nTemporalId(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH265PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH265PictureInfoFlags): void;
    static npLongTermRefPics(paramarg0: number): StdVideoEncodeH265LongTermRefPics;
    static npLongTermRefPics(paramarg0: number, paramarg1: StdVideoEncodeH265LongTermRefPics): void;
    static npRefLists(paramarg0: number): StdVideoEncodeH265ReferenceModifications;
    static npRefLists(paramarg0: number, paramarg1: StdVideoEncodeH265ReferenceModifications): void;
    static npShortTermRefPicSet(paramarg0: number): StdVideoH265ShortTermRefPicSet;
    static npShortTermRefPicSet(paramarg0: number, paramarg1: StdVideoH265ShortTermRefPicSet): void;
    static npic_type(paramarg0: number): number;
    static npic_type(paramarg0: number, paramarg1: number): void;
    static npps_pic_parameter_set_id(paramarg0: number): number;
    static npps_pic_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static npps_seq_parameter_set_id(paramarg0: number): number;
    static npps_seq_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nshort_term_ref_pic_set_idx(paramarg0: number): number;
    static nshort_term_ref_pic_set_idx(paramarg0: number, paramarg1: number): void;
    static nsps_video_parameter_set_id(paramarg0: number): number;
    static nsps_video_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PicOrderCntVal(): number;
    PicOrderCntVal(arg0: number): StdVideoEncodeH265PictureInfo;
    TemporalId(): number;
    TemporalId(arg0: number): StdVideoEncodeH265PictureInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265PictureInfo;
    flags(): StdVideoEncodeH265PictureInfoFlags;
    flags(arg0: (param0: StdVideoEncodeH265PictureInfoFlags) => void): StdVideoEncodeH265PictureInfo;
    flags(arg0: StdVideoEncodeH265PictureInfoFlags): StdVideoEncodeH265PictureInfo;
    pLongTermRefPics(): StdVideoEncodeH265LongTermRefPics;
    pLongTermRefPics(arg0: StdVideoEncodeH265LongTermRefPics): StdVideoEncodeH265PictureInfo;
    pRefLists(): StdVideoEncodeH265ReferenceModifications;
    pRefLists(arg0: StdVideoEncodeH265ReferenceModifications): StdVideoEncodeH265PictureInfo;
    pShortTermRefPicSet(): StdVideoH265ShortTermRefPicSet;
    pShortTermRefPicSet(arg0: StdVideoH265ShortTermRefPicSet): StdVideoEncodeH265PictureInfo;
    pic_type(): number;
    pic_type(arg0: number): StdVideoEncodeH265PictureInfo;
    pps_pic_parameter_set_id(): number;
    pps_pic_parameter_set_id(arg0: number): StdVideoEncodeH265PictureInfo;
    pps_seq_parameter_set_id(): number;
    pps_seq_parameter_set_id(arg0: number): StdVideoEncodeH265PictureInfo;
    set(arg0: StdVideoEncodeH265PictureInfo): StdVideoEncodeH265PictureInfo;
    set(arg0: StdVideoEncodeH265PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StdVideoEncodeH265ReferenceModifications, arg9: StdVideoH265ShortTermRefPicSet, arg10: StdVideoEncodeH265LongTermRefPics): StdVideoEncodeH265PictureInfo;
    short_term_ref_pic_set_idx(): number;
    short_term_ref_pic_set_idx(arg0: number): StdVideoEncodeH265PictureInfo;
    sizeof(): number;
    sps_video_parameter_set_id(): number;
    sps_video_parameter_set_id(arg0: number): StdVideoEncodeH265PictureInfo;
}