import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH265PictureInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeH265PictureInfoFlags.d.ts'
export class StdVideoDecodeH265PictureInfo extends Struct<StdVideoDecodeH265PictureInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static NUMBITSFORSTREFPICSETINSLICE: number;
    static NUMDELTAPOCSOFREFRPSIDX: number;
    static PICORDERCNTVAL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPS_PIC_PARAMETER_SET_ID: number;
    static REFPICSETLTCURR: number;
    static REFPICSETSTCURRAFTER: number;
    static REFPICSETSTCURRBEFORE: number;
    static RESERVED: number;
    static SIZEOF: number;
    static SPS_SEQ_PARAMETER_SET_ID: number;
    static calloc(): StdVideoDecodeH265PictureInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH265PictureInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH265PictureInfo;
    static create(paramarg0: number): StdVideoDecodeH265PictureInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH265PictureInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH265PictureInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH265PictureInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nNumBitsForSTRefPicSetInSlice(paramarg0: number): number;
    static nNumBitsForSTRefPicSetInSlice(paramarg0: number, paramarg1: number): void;
    static nNumDeltaPocsOfRefRpsIdx(paramarg0: number): number;
    static nNumDeltaPocsOfRefRpsIdx(paramarg0: number, paramarg1: number): void;
    static nPicOrderCntVal(paramarg0: number): number;
    static nPicOrderCntVal(paramarg0: number, paramarg1: number): void;
    static nRefPicSetLtCurr(paramarg0: number, paramarg1: number): number;
    static nRefPicSetLtCurr(paramarg0: number): ByteBuffer;
    static nRefPicSetLtCurr(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nRefPicSetLtCurr(paramarg0: number, paramarg1: ByteBuffer): void;
    static nRefPicSetStCurrAfter(paramarg0: number, paramarg1: number): number;
    static nRefPicSetStCurrAfter(paramarg0: number): ByteBuffer;
    static nRefPicSetStCurrAfter(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nRefPicSetStCurrAfter(paramarg0: number, paramarg1: ByteBuffer): void;
    static nRefPicSetStCurrBefore(paramarg0: number, paramarg1: number): number;
    static nRefPicSetStCurrBefore(paramarg0: number): ByteBuffer;
    static nRefPicSetStCurrBefore(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nRefPicSetStCurrBefore(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoDecodeH265PictureInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeH265PictureInfoFlags): void;
    static npps_pic_parameter_set_id(paramarg0: number): number;
    static npps_pic_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nsps_seq_parameter_set_id(paramarg0: number): number;
    static nsps_seq_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    NumBitsForSTRefPicSetInSlice(): number;
    NumBitsForSTRefPicSetInSlice(arg0: number): StdVideoDecodeH265PictureInfo;
    NumDeltaPocsOfRefRpsIdx(): number;
    NumDeltaPocsOfRefRpsIdx(arg0: number): StdVideoDecodeH265PictureInfo;
    PicOrderCntVal(): number;
    PicOrderCntVal(arg0: number): StdVideoDecodeH265PictureInfo;
    RefPicSetLtCurr(): ByteBuffer;
    RefPicSetLtCurr(arg0: ByteBuffer): StdVideoDecodeH265PictureInfo;
    RefPicSetLtCurr(arg0: number): number;
    RefPicSetLtCurr(arg0: number, arg1: number): StdVideoDecodeH265PictureInfo;
    RefPicSetStCurrAfter(): ByteBuffer;
    RefPicSetStCurrAfter(arg0: ByteBuffer): StdVideoDecodeH265PictureInfo;
    RefPicSetStCurrAfter(arg0: number): number;
    RefPicSetStCurrAfter(arg0: number, arg1: number): StdVideoDecodeH265PictureInfo;
    RefPicSetStCurrBefore(): ByteBuffer;
    RefPicSetStCurrBefore(arg0: ByteBuffer): StdVideoDecodeH265PictureInfo;
    RefPicSetStCurrBefore(arg0: number): number;
    RefPicSetStCurrBefore(arg0: number, arg1: number): StdVideoDecodeH265PictureInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH265PictureInfo;
    flags(): StdVideoDecodeH265PictureInfoFlags;
    flags(arg0: (param0: StdVideoDecodeH265PictureInfoFlags) => void): StdVideoDecodeH265PictureInfo;
    flags(arg0: StdVideoDecodeH265PictureInfoFlags): StdVideoDecodeH265PictureInfo;
    pps_pic_parameter_set_id(): number;
    pps_pic_parameter_set_id(arg0: number): StdVideoDecodeH265PictureInfo;
    set(arg0: StdVideoDecodeH265PictureInfo): StdVideoDecodeH265PictureInfo;
    set(arg0: StdVideoDecodeH265PictureInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ByteBuffer, arg7: ByteBuffer, arg8: ByteBuffer): StdVideoDecodeH265PictureInfo;
    sizeof(): number;
    sps_seq_parameter_set_id(): number;
    sps_seq_parameter_set_id(arg0: number): StdVideoDecodeH265PictureInfo;
}