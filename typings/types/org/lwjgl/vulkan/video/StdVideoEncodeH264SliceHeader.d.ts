import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264SliceHeaderFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264SliceHeaderFlags.d.ts'
import type { StdVideoEncodeH264WeightTable } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264WeightTable.d.ts'
export class StdVideoEncodeH264SliceHeader extends Struct<StdVideoEncodeH264SliceHeader> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CABAC_INIT_IDC: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISABLE_DEBLOCKING_FILTER_IDC: number;
    static FIRST_MB_IN_SLICE: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PWEIGHTTABLE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static SLICE_ALPHA_C0_OFFSET_DIV2: number;
    static SLICE_BETA_OFFSET_DIV2: number;
    static SLICE_QP_DELTA: number;
    static SLICE_TYPE: number;
    static calloc(): StdVideoEncodeH264SliceHeader;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264SliceHeader;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264SliceHeader;
    static create(paramarg0: number): StdVideoEncodeH264SliceHeader;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264SliceHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264SliceHeader;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264SliceHeader;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncabac_init_idc(paramarg0: number): number;
    static ncabac_init_idc(paramarg0: number, paramarg1: number): void;
    static ndisable_deblocking_filter_idc(paramarg0: number): number;
    static ndisable_deblocking_filter_idc(paramarg0: number, paramarg1: number): void;
    static nfirst_mb_in_slice(paramarg0: number): number;
    static nfirst_mb_in_slice(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH264SliceHeaderFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH264SliceHeaderFlags): void;
    static npWeightTable(paramarg0: number): StdVideoEncodeH264WeightTable;
    static npWeightTable(paramarg0: number, paramarg1: StdVideoEncodeH264WeightTable): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nslice_alpha_c0_offset_div2(paramarg0: number): number;
    static nslice_alpha_c0_offset_div2(paramarg0: number, paramarg1: number): void;
    static nslice_beta_offset_div2(paramarg0: number): number;
    static nslice_beta_offset_div2(paramarg0: number, paramarg1: number): void;
    static nslice_qp_delta(paramarg0: number): number;
    static nslice_qp_delta(paramarg0: number, paramarg1: number): void;
    static nslice_type(paramarg0: number): number;
    static nslice_type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cabac_init_idc(): number;
    cabac_init_idc(arg0: number): StdVideoEncodeH264SliceHeader;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264SliceHeader;
    disable_deblocking_filter_idc(): number;
    disable_deblocking_filter_idc(arg0: number): StdVideoEncodeH264SliceHeader;
    first_mb_in_slice(): number;
    first_mb_in_slice(arg0: number): StdVideoEncodeH264SliceHeader;
    flags(): StdVideoEncodeH264SliceHeaderFlags;
    flags(arg0: (param0: StdVideoEncodeH264SliceHeaderFlags) => void): StdVideoEncodeH264SliceHeader;
    flags(arg0: StdVideoEncodeH264SliceHeaderFlags): StdVideoEncodeH264SliceHeader;
    pWeightTable(): StdVideoEncodeH264WeightTable;
    pWeightTable(arg0: StdVideoEncodeH264WeightTable): StdVideoEncodeH264SliceHeader;
    set(arg0: StdVideoEncodeH264SliceHeader): StdVideoEncodeH264SliceHeader;
    set(arg0: StdVideoEncodeH264SliceHeaderFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StdVideoEncodeH264WeightTable): StdVideoEncodeH264SliceHeader;
    sizeof(): number;
    slice_alpha_c0_offset_div2(): number;
    slice_alpha_c0_offset_div2(arg0: number): StdVideoEncodeH264SliceHeader;
    slice_beta_offset_div2(): number;
    slice_beta_offset_div2(arg0: number): StdVideoEncodeH264SliceHeader;
    slice_qp_delta(): number;
    slice_qp_delta(arg0: number): StdVideoEncodeH264SliceHeader;
    slice_type(): number;
    slice_type(arg0: number): StdVideoEncodeH264SliceHeader;
}