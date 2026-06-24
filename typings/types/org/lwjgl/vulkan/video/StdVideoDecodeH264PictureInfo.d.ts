import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH264PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeH264PictureInfoFlags.d.ts'
export class StdVideoDecodeH264PictureInfo extends Struct<StdVideoDecodeH264PictureInfo> implements NativeResource {
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
    static RESERVED1: number;
    static RESERVED2: number;
    static SEQ_PARAMETER_SET_ID: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH264PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH264PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH264PictureInfo;
    static create(paramarg0: number): StdVideoDecodeH264PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH264PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH264PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH264PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPicOrderCnt(paramarg0: number, paramarg1: number): number;
    static nPicOrderCnt(paramarg0: number): IntBuffer;
    static nPicOrderCnt(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nPicOrderCnt(paramarg0: number, paramarg1: IntBuffer): void;
    static nflags(paramarg0: number): StdVideoDecodeH264PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeH264PictureInfoFlags): void;
    static nframe_num(paramarg0: number): number;
    static nframe_num(paramarg0: number, paramarg1: number): void;
    static nidr_pic_id(paramarg0: number): number;
    static nidr_pic_id(paramarg0: number, paramarg1: number): void;
    static npic_parameter_set_id(paramarg0: number): number;
    static npic_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nreserved2(paramarg0: number): number;
    static nreserved2(paramarg0: number, paramarg1: number): void;
    static nseq_parameter_set_id(paramarg0: number): number;
    static nseq_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PicOrderCnt(): IntBuffer;
    PicOrderCnt(arg0: IntBuffer): StdVideoDecodeH264PictureInfo;
    PicOrderCnt(arg0: number): number;
    PicOrderCnt(arg0: number, arg1: number): StdVideoDecodeH264PictureInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH264PictureInfo;
    flags(): StdVideoDecodeH264PictureInfoFlags;
    flags(arg0: (param0: StdVideoDecodeH264PictureInfoFlags) => void): StdVideoDecodeH264PictureInfo;
    flags(arg0: StdVideoDecodeH264PictureInfoFlags): StdVideoDecodeH264PictureInfo;
    frame_num(): number;
    frame_num(arg0: number): StdVideoDecodeH264PictureInfo;
    idr_pic_id(): number;
    idr_pic_id(arg0: number): StdVideoDecodeH264PictureInfo;
    pic_parameter_set_id(): number;
    pic_parameter_set_id(arg0: number): StdVideoDecodeH264PictureInfo;
    seq_parameter_set_id(): number;
    seq_parameter_set_id(arg0: number): StdVideoDecodeH264PictureInfo;
    set(arg0: StdVideoDecodeH264PictureInfo): StdVideoDecodeH264PictureInfo;
    set(arg0: StdVideoDecodeH264PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: IntBuffer): StdVideoDecodeH264PictureInfo;
    sizeof(): number;
}