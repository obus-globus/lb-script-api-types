import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH265PictureInfoFlags extends Struct<StdVideoEncodeH265PictureInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH265PictureInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265PictureInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265PictureInfoFlags;
    static create(paramarg0: number): StdVideoEncodeH265PictureInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265PictureInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265PictureInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265PictureInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nIrapPicFlag(paramarg0: number): number;
    static nIrapPicFlag(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static ncross_layer_bla_flag(paramarg0: number): number;
    static ncross_layer_bla_flag(paramarg0: number, paramarg1: number): void;
    static ndiscardable_flag(paramarg0: number): number;
    static ndiscardable_flag(paramarg0: number, paramarg1: number): void;
    static nis_reference(paramarg0: number): number;
    static nis_reference(paramarg0: number, paramarg1: number): void;
    static nno_output_of_prior_pics_flag(paramarg0: number): number;
    static nno_output_of_prior_pics_flag(paramarg0: number, paramarg1: number): void;
    static npic_output_flag(paramarg0: number): number;
    static npic_output_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nshort_term_ref_pic_set_sps_flag(paramarg0: number): number;
    static nshort_term_ref_pic_set_sps_flag(paramarg0: number, paramarg1: number): void;
    static nslice_temporal_mvp_enabled_flag(paramarg0: number): number;
    static nslice_temporal_mvp_enabled_flag(paramarg0: number, paramarg1: number): void;
    static nused_for_long_term_reference(paramarg0: number): number;
    static nused_for_long_term_reference(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    IrapPicFlag(): boolean;
    IrapPicFlag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265PictureInfoFlags;
    cross_layer_bla_flag(): boolean;
    cross_layer_bla_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    discardable_flag(): boolean;
    discardable_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    is_reference(): boolean;
    is_reference(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    no_output_of_prior_pics_flag(): boolean;
    no_output_of_prior_pics_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    pic_output_flag(): boolean;
    pic_output_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean): StdVideoEncodeH265PictureInfoFlags;
    set(arg0: StdVideoEncodeH265PictureInfoFlags): StdVideoEncodeH265PictureInfoFlags;
    short_term_ref_pic_set_sps_flag(): boolean;
    short_term_ref_pic_set_sps_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    sizeof(): number;
    slice_temporal_mvp_enabled_flag(): boolean;
    slice_temporal_mvp_enabled_flag(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
    used_for_long_term_reference(): boolean;
    used_for_long_term_reference(arg0: boolean): StdVideoEncodeH265PictureInfoFlags;
}