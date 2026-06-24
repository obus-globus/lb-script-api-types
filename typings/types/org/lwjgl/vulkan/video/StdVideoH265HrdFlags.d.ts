import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265HrdFlags extends Struct<StdVideoH265HrdFlags> implements NativeResource {
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
    static calloc(): StdVideoH265HrdFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH265HrdFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265HrdFlags;
    static create(paramarg0: number): StdVideoH265HrdFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265HrdFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265HrdFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH265HrdFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nfixed_pic_rate_general_flag(paramarg0: number): number;
    static nfixed_pic_rate_general_flag(paramarg0: number, paramarg1: number): void;
    static nfixed_pic_rate_within_cvs_flag(paramarg0: number): number;
    static nfixed_pic_rate_within_cvs_flag(paramarg0: number, paramarg1: number): void;
    static nlow_delay_hrd_flag(paramarg0: number): number;
    static nlow_delay_hrd_flag(paramarg0: number, paramarg1: number): void;
    static nnal_hrd_parameters_present_flag(paramarg0: number): number;
    static nnal_hrd_parameters_present_flag(paramarg0: number, paramarg1: number): void;
    static nsub_pic_cpb_params_in_pic_timing_sei_flag(paramarg0: number): number;
    static nsub_pic_cpb_params_in_pic_timing_sei_flag(paramarg0: number, paramarg1: number): void;
    static nsub_pic_hrd_params_present_flag(paramarg0: number): number;
    static nsub_pic_hrd_params_present_flag(paramarg0: number, paramarg1: number): void;
    static nvcl_hrd_parameters_present_flag(paramarg0: number): number;
    static nvcl_hrd_parameters_present_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265HrdFlags;
    fixed_pic_rate_general_flag(): number;
    fixed_pic_rate_general_flag(arg0: number): StdVideoH265HrdFlags;
    fixed_pic_rate_within_cvs_flag(): number;
    fixed_pic_rate_within_cvs_flag(arg0: number): StdVideoH265HrdFlags;
    low_delay_hrd_flag(): number;
    low_delay_hrd_flag(arg0: number): StdVideoH265HrdFlags;
    nal_hrd_parameters_present_flag(): boolean;
    nal_hrd_parameters_present_flag(arg0: boolean): StdVideoH265HrdFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number): StdVideoH265HrdFlags;
    set(arg0: StdVideoH265HrdFlags): StdVideoH265HrdFlags;
    sizeof(): number;
    sub_pic_cpb_params_in_pic_timing_sei_flag(): boolean;
    sub_pic_cpb_params_in_pic_timing_sei_flag(arg0: boolean): StdVideoH265HrdFlags;
    sub_pic_hrd_params_present_flag(): boolean;
    sub_pic_hrd_params_present_flag(arg0: boolean): StdVideoH265HrdFlags;
    vcl_hrd_parameters_present_flag(): boolean;
    vcl_hrd_parameters_present_flag(arg0: boolean): StdVideoH265HrdFlags;
}