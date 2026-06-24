import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH265SliceSegmentHeaderFlags extends Struct<StdVideoEncodeH265SliceSegmentHeaderFlags> implements NativeResource {
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
    static calloc(): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static create(paramarg0: number): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static ncabac_init_flag(paramarg0: number): number;
    static ncabac_init_flag(paramarg0: number, paramarg1: number): void;
    static ncollocated_from_l0_flag(paramarg0: number): number;
    static ncollocated_from_l0_flag(paramarg0: number, paramarg1: number): void;
    static ncu_chroma_qp_offset_enabled_flag(paramarg0: number): number;
    static ncu_chroma_qp_offset_enabled_flag(paramarg0: number, paramarg1: number): void;
    static ndeblocking_filter_override_flag(paramarg0: number): number;
    static ndeblocking_filter_override_flag(paramarg0: number, paramarg1: number): void;
    static ndependent_slice_segment_flag(paramarg0: number): number;
    static ndependent_slice_segment_flag(paramarg0: number, paramarg1: number): void;
    static nfirst_slice_segment_in_pic_flag(paramarg0: number): number;
    static nfirst_slice_segment_in_pic_flag(paramarg0: number, paramarg1: number): void;
    static nmvd_l1_zero_flag(paramarg0: number): number;
    static nmvd_l1_zero_flag(paramarg0: number, paramarg1: number): void;
    static nnum_ref_idx_active_override_flag(paramarg0: number): number;
    static nnum_ref_idx_active_override_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nslice_deblocking_filter_disabled_flag(paramarg0: number): number;
    static nslice_deblocking_filter_disabled_flag(paramarg0: number, paramarg1: number): void;
    static nslice_loop_filter_across_slices_enabled_flag(paramarg0: number): number;
    static nslice_loop_filter_across_slices_enabled_flag(paramarg0: number, paramarg1: number): void;
    static nslice_sao_chroma_flag(paramarg0: number): number;
    static nslice_sao_chroma_flag(paramarg0: number, paramarg1: number): void;
    static nslice_sao_luma_flag(paramarg0: number): number;
    static nslice_sao_luma_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cabac_init_flag(): boolean;
    cabac_init_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    close(): void;
    collocated_from_l0_flag(): boolean;
    collocated_from_l0_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265SliceSegmentHeaderFlags;
    cu_chroma_qp_offset_enabled_flag(): boolean;
    cu_chroma_qp_offset_enabled_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    deblocking_filter_override_flag(): boolean;
    deblocking_filter_override_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    dependent_slice_segment_flag(): boolean;
    dependent_slice_segment_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    first_slice_segment_in_pic_flag(): boolean;
    first_slice_segment_in_pic_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    mvd_l1_zero_flag(): boolean;
    mvd_l1_zero_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    num_ref_idx_active_override_flag(): boolean;
    num_ref_idx_active_override_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    set(arg0: StdVideoEncodeH265SliceSegmentHeaderFlags): StdVideoEncodeH265SliceSegmentHeaderFlags;
    sizeof(): number;
    slice_deblocking_filter_disabled_flag(): boolean;
    slice_deblocking_filter_disabled_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    slice_loop_filter_across_slices_enabled_flag(): boolean;
    slice_loop_filter_across_slices_enabled_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    slice_sao_chroma_flag(): boolean;
    slice_sao_chroma_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
    slice_sao_luma_flag(): boolean;
    slice_sao_luma_flag(arg0: boolean): StdVideoEncodeH265SliceSegmentHeaderFlags;
}