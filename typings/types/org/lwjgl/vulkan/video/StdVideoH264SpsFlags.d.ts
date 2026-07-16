import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH264SpsFlags extends Struct<StdVideoH264SpsFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH264SpsFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH264SpsFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264SpsFlags;
    static create(paramarg0: number): StdVideoH264SpsFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264SpsFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264SpsFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH264SpsFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nconstraint_set0_flag(paramarg0: number): number;
    static nconstraint_set0_flag(paramarg0: number, paramarg1: number): void;
    static nconstraint_set1_flag(paramarg0: number): number;
    static nconstraint_set1_flag(paramarg0: number, paramarg1: number): void;
    static nconstraint_set2_flag(paramarg0: number): number;
    static nconstraint_set2_flag(paramarg0: number, paramarg1: number): void;
    static nconstraint_set3_flag(paramarg0: number): number;
    static nconstraint_set3_flag(paramarg0: number, paramarg1: number): void;
    static nconstraint_set4_flag(paramarg0: number): number;
    static nconstraint_set4_flag(paramarg0: number, paramarg1: number): void;
    static nconstraint_set5_flag(paramarg0: number): number;
    static nconstraint_set5_flag(paramarg0: number, paramarg1: number): void;
    static ndelta_pic_order_always_zero_flag(paramarg0: number): number;
    static ndelta_pic_order_always_zero_flag(paramarg0: number, paramarg1: number): void;
    static ndirect_8x8_inference_flag(paramarg0: number): number;
    static ndirect_8x8_inference_flag(paramarg0: number, paramarg1: number): void;
    static nframe_cropping_flag(paramarg0: number): number;
    static nframe_cropping_flag(paramarg0: number, paramarg1: number): void;
    static nframe_mbs_only_flag(paramarg0: number): number;
    static nframe_mbs_only_flag(paramarg0: number, paramarg1: number): void;
    static ngaps_in_frame_num_value_allowed_flag(paramarg0: number): number;
    static ngaps_in_frame_num_value_allowed_flag(paramarg0: number, paramarg1: number): void;
    static nmb_adaptive_frame_field_flag(paramarg0: number): number;
    static nmb_adaptive_frame_field_flag(paramarg0: number, paramarg1: number): void;
    static nqpprime_y_zero_transform_bypass_flag(paramarg0: number): number;
    static nqpprime_y_zero_transform_bypass_flag(paramarg0: number, paramarg1: number): void;
    static nseparate_colour_plane_flag(paramarg0: number): number;
    static nseparate_colour_plane_flag(paramarg0: number, paramarg1: number): void;
    static nseq_scaling_matrix_present_flag(paramarg0: number): number;
    static nseq_scaling_matrix_present_flag(paramarg0: number, paramarg1: number): void;
    static nvui_parameters_present_flag(paramarg0: number): number;
    static nvui_parameters_present_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constraint_set0_flag(): boolean;
    constraint_set0_flag(arg0: boolean): StdVideoH264SpsFlags;
    constraint_set1_flag(): boolean;
    constraint_set1_flag(arg0: boolean): StdVideoH264SpsFlags;
    constraint_set2_flag(): boolean;
    constraint_set2_flag(arg0: boolean): StdVideoH264SpsFlags;
    constraint_set3_flag(): boolean;
    constraint_set3_flag(arg0: boolean): StdVideoH264SpsFlags;
    constraint_set4_flag(): boolean;
    constraint_set4_flag(arg0: boolean): StdVideoH264SpsFlags;
    constraint_set5_flag(): boolean;
    constraint_set5_flag(arg0: boolean): StdVideoH264SpsFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264SpsFlags;
    delta_pic_order_always_zero_flag(): boolean;
    delta_pic_order_always_zero_flag(arg0: boolean): StdVideoH264SpsFlags;
    direct_8x8_inference_flag(): boolean;
    direct_8x8_inference_flag(arg0: boolean): StdVideoH264SpsFlags;
    frame_cropping_flag(): boolean;
    frame_cropping_flag(arg0: boolean): StdVideoH264SpsFlags;
    frame_mbs_only_flag(): boolean;
    frame_mbs_only_flag(arg0: boolean): StdVideoH264SpsFlags;
    gaps_in_frame_num_value_allowed_flag(): boolean;
    gaps_in_frame_num_value_allowed_flag(arg0: boolean): StdVideoH264SpsFlags;
    mb_adaptive_frame_field_flag(): boolean;
    mb_adaptive_frame_field_flag(arg0: boolean): StdVideoH264SpsFlags;
    qpprime_y_zero_transform_bypass_flag(): boolean;
    qpprime_y_zero_transform_bypass_flag(arg0: boolean): StdVideoH264SpsFlags;
    separate_colour_plane_flag(): boolean;
    separate_colour_plane_flag(arg0: boolean): StdVideoH264SpsFlags;
    seq_scaling_matrix_present_flag(): boolean;
    seq_scaling_matrix_present_flag(arg0: boolean): StdVideoH264SpsFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean): StdVideoH264SpsFlags;
    set(arg0: StdVideoH264SpsFlags): StdVideoH264SpsFlags;
    sizeof(): number;
    vui_parameters_present_flag(): boolean;
    vui_parameters_present_flag(arg0: boolean): StdVideoH264SpsFlags;
}