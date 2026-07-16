import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264ReferenceInfoFlags.d.ts'
export class StdVideoEncodeH264ReferenceInfo extends Struct<StdVideoEncodeH264ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAMENUM: number;
    static LONG_TERM_FRAME_IDX: number;
    static LONG_TERM_PIC_NUM: number;
    static PICORDERCNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMARY_PIC_TYPE: number;
    static SIZEOF: number;
    static TEMPORAL_ID: number;
    static calloc(): StdVideoEncodeH264ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264ReferenceInfo;
    static create(paramarg0: number): StdVideoEncodeH264ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nFrameNum(paramarg0: number): number;
    static nFrameNum(paramarg0: number, paramarg1: number): void;
    static nPicOrderCnt(paramarg0: number): number;
    static nPicOrderCnt(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH264ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH264ReferenceInfoFlags): void;
    static nlong_term_frame_idx(paramarg0: number): number;
    static nlong_term_frame_idx(paramarg0: number, paramarg1: number): void;
    static nlong_term_pic_num(paramarg0: number): number;
    static nlong_term_pic_num(paramarg0: number, paramarg1: number): void;
    static nprimary_pic_type(paramarg0: number): number;
    static nprimary_pic_type(paramarg0: number, paramarg1: number): void;
    static ntemporal_id(paramarg0: number): number;
    static ntemporal_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FrameNum(): number;
    FrameNum(arg0: number): StdVideoEncodeH264ReferenceInfo;
    PicOrderCnt(): number;
    PicOrderCnt(arg0: number): StdVideoEncodeH264ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264ReferenceInfo;
    flags(): StdVideoEncodeH264ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoEncodeH264ReferenceInfoFlags) => void): StdVideoEncodeH264ReferenceInfo;
    flags(arg0: StdVideoEncodeH264ReferenceInfoFlags): StdVideoEncodeH264ReferenceInfo;
    long_term_frame_idx(): number;
    long_term_frame_idx(arg0: number): StdVideoEncodeH264ReferenceInfo;
    long_term_pic_num(): number;
    long_term_pic_num(arg0: number): StdVideoEncodeH264ReferenceInfo;
    primary_pic_type(): number;
    primary_pic_type(arg0: number): StdVideoEncodeH264ReferenceInfo;
    set(arg0: StdVideoEncodeH264ReferenceInfo): StdVideoEncodeH264ReferenceInfo;
    set(arg0: StdVideoEncodeH264ReferenceInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): StdVideoEncodeH264ReferenceInfo;
    sizeof(): number;
    temporal_id(): number;
    temporal_id(arg0: number): StdVideoEncodeH264ReferenceInfo;
}