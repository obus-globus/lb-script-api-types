import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264PictureInfoFlags.d.ts'
import type { StdVideoEncodeH264ReferenceListsInfo } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264ReferenceListsInfo.d.ts'
export class StdVideoEncodeH264PictureInfo extends Struct<StdVideoEncodeH264PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAME_NUM: number;
    static IDR_PIC_ID: number;
    static PICORDERCNT: number;
    static PIC_PARAMETER_SET_ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFLISTS: number;
    static PRIMARY_PIC_TYPE: number;
    static RESERVED1: number;
    static SEQ_PARAMETER_SET_ID: number;
    static SIZEOF: number;
    static TEMPORAL_ID: number;
    static calloc(): StdVideoEncodeH264PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264PictureInfo;
    static create(paramarg0: number): StdVideoEncodeH264PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPicOrderCnt(paramarg0: number): number;
    static nPicOrderCnt(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH264PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH264PictureInfoFlags): void;
    static nframe_num(paramarg0: number): number;
    static nframe_num(paramarg0: number, paramarg1: number): void;
    static nidr_pic_id(paramarg0: number): number;
    static nidr_pic_id(paramarg0: number, paramarg1: number): void;
    static npRefLists(paramarg0: number): StdVideoEncodeH264ReferenceListsInfo;
    static npRefLists(paramarg0: number, paramarg1: StdVideoEncodeH264ReferenceListsInfo): void;
    static npic_parameter_set_id(paramarg0: number): number;
    static npic_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nprimary_pic_type(paramarg0: number): number;
    static nprimary_pic_type(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nseq_parameter_set_id(paramarg0: number): number;
    static nseq_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static ntemporal_id(paramarg0: number): number;
    static ntemporal_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PicOrderCnt(): number;
    PicOrderCnt(arg0: number): StdVideoEncodeH264PictureInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264PictureInfo;
    flags(): StdVideoEncodeH264PictureInfoFlags;
    flags(arg0: (param0: StdVideoEncodeH264PictureInfoFlags) => void): StdVideoEncodeH264PictureInfo;
    flags(arg0: StdVideoEncodeH264PictureInfoFlags): StdVideoEncodeH264PictureInfo;
    frame_num(): number;
    frame_num(arg0: number): StdVideoEncodeH264PictureInfo;
    idr_pic_id(): number;
    idr_pic_id(arg0: number): StdVideoEncodeH264PictureInfo;
    pRefLists(): StdVideoEncodeH264ReferenceListsInfo;
    pRefLists(arg0: StdVideoEncodeH264ReferenceListsInfo): StdVideoEncodeH264PictureInfo;
    pic_parameter_set_id(): number;
    pic_parameter_set_id(arg0: number): StdVideoEncodeH264PictureInfo;
    primary_pic_type(): number;
    primary_pic_type(arg0: number): StdVideoEncodeH264PictureInfo;
    seq_parameter_set_id(): number;
    seq_parameter_set_id(arg0: number): StdVideoEncodeH264PictureInfo;
    set(arg0: StdVideoEncodeH264PictureInfo): StdVideoEncodeH264PictureInfo;
    set(arg0: StdVideoEncodeH264PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StdVideoEncodeH264ReferenceListsInfo): StdVideoEncodeH264PictureInfo;
    sizeof(): number;
    temporal_id(): number;
    temporal_id(arg0: number): StdVideoEncodeH264PictureInfo;
}