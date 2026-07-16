import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH264PpsFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH264PpsFlags.d.ts'
import type { StdVideoH264ScalingLists } from '../../../../org/lwjgl/vulkan/video/StdVideoH264ScalingLists.d.ts'
export class StdVideoH264PictureParameterSet extends Struct<StdVideoH264PictureParameterSet> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMA_QP_INDEX_OFFSET: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static NUM_REF_IDX_L0_DEFAULT_ACTIVE_MINUS1: number;
    static NUM_REF_IDX_L1_DEFAULT_ACTIVE_MINUS1: number;
    static PIC_INIT_QP_MINUS26: number;
    static PIC_INIT_QS_MINUS26: number;
    static PIC_PARAMETER_SET_ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSCALINGLISTS: number;
    static SECOND_CHROMA_QP_INDEX_OFFSET: number;
    static SEQ_PARAMETER_SET_ID: number;
    static SIZEOF: number;
    static WEIGHTED_BIPRED_IDC: number;
    static calloc(): StdVideoH264PictureParameterSet;
    static calloc(paramarg0: MemoryStack): StdVideoH264PictureParameterSet;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264PictureParameterSet;
    static create(paramarg0: number): StdVideoH264PictureParameterSet;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264PictureParameterSet;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264PictureParameterSet;
    static malloc(paramarg0: MemoryStack): StdVideoH264PictureParameterSet;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchroma_qp_index_offset(paramarg0: number): number;
    static nchroma_qp_index_offset(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoH264PpsFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH264PpsFlags): void;
    static nnum_ref_idx_l0_default_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l0_default_active_minus1(paramarg0: number, paramarg1: number): void;
    static nnum_ref_idx_l1_default_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l1_default_active_minus1(paramarg0: number, paramarg1: number): void;
    static npScalingLists(paramarg0: number): StdVideoH264ScalingLists;
    static npScalingLists(paramarg0: number, paramarg1: StdVideoH264ScalingLists): void;
    static npic_init_qp_minus26(paramarg0: number): number;
    static npic_init_qp_minus26(paramarg0: number, paramarg1: number): void;
    static npic_init_qs_minus26(paramarg0: number): number;
    static npic_init_qs_minus26(paramarg0: number, paramarg1: number): void;
    static npic_parameter_set_id(paramarg0: number): number;
    static npic_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nsecond_chroma_qp_index_offset(paramarg0: number): number;
    static nsecond_chroma_qp_index_offset(paramarg0: number, paramarg1: number): void;
    static nseq_parameter_set_id(paramarg0: number): number;
    static nseq_parameter_set_id(paramarg0: number, paramarg1: number): void;
    static nweighted_bipred_idc(paramarg0: number): number;
    static nweighted_bipred_idc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chroma_qp_index_offset(): number;
    chroma_qp_index_offset(arg0: number): StdVideoH264PictureParameterSet;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264PictureParameterSet;
    flags(): StdVideoH264PpsFlags;
    flags(arg0: (param0: StdVideoH264PpsFlags) => void): StdVideoH264PictureParameterSet;
    flags(arg0: StdVideoH264PpsFlags): StdVideoH264PictureParameterSet;
    num_ref_idx_l0_default_active_minus1(): number;
    num_ref_idx_l0_default_active_minus1(arg0: number): StdVideoH264PictureParameterSet;
    num_ref_idx_l1_default_active_minus1(): number;
    num_ref_idx_l1_default_active_minus1(arg0: number): StdVideoH264PictureParameterSet;
    pScalingLists(): StdVideoH264ScalingLists;
    pScalingLists(arg0: StdVideoH264ScalingLists): StdVideoH264PictureParameterSet;
    pic_init_qp_minus26(): number;
    pic_init_qp_minus26(arg0: number): StdVideoH264PictureParameterSet;
    pic_init_qs_minus26(): number;
    pic_init_qs_minus26(arg0: number): StdVideoH264PictureParameterSet;
    pic_parameter_set_id(): number;
    pic_parameter_set_id(arg0: number): StdVideoH264PictureParameterSet;
    second_chroma_qp_index_offset(): number;
    second_chroma_qp_index_offset(arg0: number): StdVideoH264PictureParameterSet;
    seq_parameter_set_id(): number;
    seq_parameter_set_id(arg0: number): StdVideoH264PictureParameterSet;
    set(arg0: StdVideoH264PictureParameterSet): StdVideoH264PictureParameterSet;
    set(arg0: StdVideoH264PpsFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: StdVideoH264ScalingLists): StdVideoH264PictureParameterSet;
    sizeof(): number;
    weighted_bipred_idc(): number;
    weighted_bipred_idc(arg0: number): StdVideoH264PictureParameterSet;
}