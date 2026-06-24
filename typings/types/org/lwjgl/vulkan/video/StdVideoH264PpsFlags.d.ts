import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH264PpsFlags extends Struct<StdVideoH264PpsFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH264PpsFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH264PpsFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264PpsFlags;
    static create(paramarg0: number): StdVideoH264PpsFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264PpsFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264PpsFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH264PpsFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbottom_field_pic_order_in_frame_present_flag(paramarg0: number): number;
    static nbottom_field_pic_order_in_frame_present_flag(paramarg0: number, paramarg1: number): void;
    static nconstrained_intra_pred_flag(paramarg0: number): number;
    static nconstrained_intra_pred_flag(paramarg0: number, paramarg1: number): void;
    static ndeblocking_filter_control_present_flag(paramarg0: number): number;
    static ndeblocking_filter_control_present_flag(paramarg0: number, paramarg1: number): void;
    static nentropy_coding_mode_flag(paramarg0: number): number;
    static nentropy_coding_mode_flag(paramarg0: number, paramarg1: number): void;
    static npic_scaling_matrix_present_flag(paramarg0: number): number;
    static npic_scaling_matrix_present_flag(paramarg0: number, paramarg1: number): void;
    static nredundant_pic_cnt_present_flag(paramarg0: number): number;
    static nredundant_pic_cnt_present_flag(paramarg0: number, paramarg1: number): void;
    static ntransform_8x8_mode_flag(paramarg0: number): number;
    static ntransform_8x8_mode_flag(paramarg0: number, paramarg1: number): void;
    static nweighted_pred_flag(paramarg0: number): number;
    static nweighted_pred_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bottom_field_pic_order_in_frame_present_flag(): boolean;
    bottom_field_pic_order_in_frame_present_flag(arg0: boolean): StdVideoH264PpsFlags;
    close(): void;
    constrained_intra_pred_flag(): boolean;
    constrained_intra_pred_flag(arg0: boolean): StdVideoH264PpsFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264PpsFlags;
    deblocking_filter_control_present_flag(): boolean;
    deblocking_filter_control_present_flag(arg0: boolean): StdVideoH264PpsFlags;
    entropy_coding_mode_flag(): boolean;
    entropy_coding_mode_flag(arg0: boolean): StdVideoH264PpsFlags;
    pic_scaling_matrix_present_flag(): boolean;
    pic_scaling_matrix_present_flag(arg0: boolean): StdVideoH264PpsFlags;
    redundant_pic_cnt_present_flag(): boolean;
    redundant_pic_cnt_present_flag(arg0: boolean): StdVideoH264PpsFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): StdVideoH264PpsFlags;
    set(arg0: StdVideoH264PpsFlags): StdVideoH264PpsFlags;
    sizeof(): number;
    transform_8x8_mode_flag(): boolean;
    transform_8x8_mode_flag(arg0: boolean): StdVideoH264PpsFlags;
    weighted_pred_flag(): boolean;
    weighted_pred_flag(arg0: boolean): StdVideoH264PpsFlags;
}