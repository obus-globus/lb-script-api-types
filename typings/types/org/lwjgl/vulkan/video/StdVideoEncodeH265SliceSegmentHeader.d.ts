import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265SliceSegmentHeaderFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265SliceSegmentHeaderFlags.d.ts'
import type { StdVideoEncodeH265WeightTable } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265WeightTable.d.ts'
export class StdVideoEncodeH265SliceSegmentHeader extends Struct<StdVideoEncodeH265SliceSegmentHeader> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLLOCATED_REF_IDX: number;
    static FLAGS: number;
    static MAXNUMMERGECAND: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PWEIGHTTABLE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static SLICE_ACT_CB_QP_OFFSET: number;
    static SLICE_ACT_CR_QP_OFFSET: number;
    static SLICE_ACT_Y_QP_OFFSET: number;
    static SLICE_BETA_OFFSET_DIV2: number;
    static SLICE_CB_QP_OFFSET: number;
    static SLICE_CR_QP_OFFSET: number;
    static SLICE_QP_DELTA: number;
    static SLICE_SEGMENT_ADDRESS: number;
    static SLICE_TC_OFFSET_DIV2: number;
    static SLICE_TYPE: number;
    static calloc(): StdVideoEncodeH265SliceSegmentHeader;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265SliceSegmentHeader;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265SliceSegmentHeader;
    static create(paramarg0: number): StdVideoEncodeH265SliceSegmentHeader;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265SliceSegmentHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265SliceSegmentHeader;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265SliceSegmentHeader;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nMaxNumMergeCand(paramarg0: number): number;
    static nMaxNumMergeCand(paramarg0: number, paramarg1: number): void;
    static ncollocated_ref_idx(paramarg0: number): number;
    static ncollocated_ref_idx(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH265SliceSegmentHeaderFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH265SliceSegmentHeaderFlags): void;
    static npWeightTable(paramarg0: number): StdVideoEncodeH265WeightTable;
    static npWeightTable(paramarg0: number, paramarg1: StdVideoEncodeH265WeightTable): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nslice_act_cb_qp_offset(paramarg0: number): number;
    static nslice_act_cb_qp_offset(paramarg0: number, paramarg1: number): void;
    static nslice_act_cr_qp_offset(paramarg0: number): number;
    static nslice_act_cr_qp_offset(paramarg0: number, paramarg1: number): void;
    static nslice_act_y_qp_offset(paramarg0: number): number;
    static nslice_act_y_qp_offset(paramarg0: number, paramarg1: number): void;
    static nslice_beta_offset_div2(paramarg0: number): number;
    static nslice_beta_offset_div2(paramarg0: number, paramarg1: number): void;
    static nslice_cb_qp_offset(paramarg0: number): number;
    static nslice_cb_qp_offset(paramarg0: number, paramarg1: number): void;
    static nslice_cr_qp_offset(paramarg0: number): number;
    static nslice_cr_qp_offset(paramarg0: number, paramarg1: number): void;
    static nslice_qp_delta(paramarg0: number): number;
    static nslice_qp_delta(paramarg0: number, paramarg1: number): void;
    static nslice_segment_address(paramarg0: number): number;
    static nslice_segment_address(paramarg0: number, paramarg1: number): void;
    static nslice_tc_offset_div2(paramarg0: number): number;
    static nslice_tc_offset_div2(paramarg0: number, paramarg1: number): void;
    static nslice_type(paramarg0: number): number;
    static nslice_type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    MaxNumMergeCand(): number;
    MaxNumMergeCand(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    close(): void;
    collocated_ref_idx(): number;
    collocated_ref_idx(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265SliceSegmentHeader;
    flags(): StdVideoEncodeH265SliceSegmentHeaderFlags;
    flags(arg0: (param0: StdVideoEncodeH265SliceSegmentHeaderFlags) => void): StdVideoEncodeH265SliceSegmentHeader;
    flags(arg0: StdVideoEncodeH265SliceSegmentHeaderFlags): StdVideoEncodeH265SliceSegmentHeader;
    pWeightTable(): StdVideoEncodeH265WeightTable;
    pWeightTable(arg0: StdVideoEncodeH265WeightTable): StdVideoEncodeH265SliceSegmentHeader;
    set(arg0: StdVideoEncodeH265SliceSegmentHeader): StdVideoEncodeH265SliceSegmentHeader;
    set(arg0: StdVideoEncodeH265SliceSegmentHeaderFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: StdVideoEncodeH265WeightTable): StdVideoEncodeH265SliceSegmentHeader;
    sizeof(): number;
    slice_act_cb_qp_offset(): number;
    slice_act_cb_qp_offset(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_act_cr_qp_offset(): number;
    slice_act_cr_qp_offset(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_act_y_qp_offset(): number;
    slice_act_y_qp_offset(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_beta_offset_div2(): number;
    slice_beta_offset_div2(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_cb_qp_offset(): number;
    slice_cb_qp_offset(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_cr_qp_offset(): number;
    slice_cr_qp_offset(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_qp_delta(): number;
    slice_qp_delta(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_segment_address(): number;
    slice_segment_address(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_tc_offset_div2(): number;
    slice_tc_offset_div2(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
    slice_type(): number;
    slice_type(arg0: number): StdVideoEncodeH265SliceSegmentHeader;
}