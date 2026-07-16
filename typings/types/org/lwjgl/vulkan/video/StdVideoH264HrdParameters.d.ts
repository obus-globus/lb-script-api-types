import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH264HrdParameters extends Struct<StdVideoH264HrdParameters> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BIT_RATE_SCALE: number;
    static BIT_RATE_VALUE_MINUS1: number;
    static CBR_FLAG: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CPB_CNT_MINUS1: number;
    static CPB_REMOVAL_DELAY_LENGTH_MINUS1: number;
    static CPB_SIZE_SCALE: number;
    static CPB_SIZE_VALUE_MINUS1: number;
    static DPB_OUTPUT_DELAY_LENGTH_MINUS1: number;
    static INITIAL_CPB_REMOVAL_DELAY_LENGTH_MINUS1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static TIME_OFFSET_LENGTH: number;
    static calloc(): StdVideoH264HrdParameters;
    static calloc(paramarg0: MemoryStack): StdVideoH264HrdParameters;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264HrdParameters;
    static create(paramarg0: number): StdVideoH264HrdParameters;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264HrdParameters;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264HrdParameters;
    static malloc(paramarg0: MemoryStack): StdVideoH264HrdParameters;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbit_rate_scale(paramarg0: number): number;
    static nbit_rate_scale(paramarg0: number, paramarg1: number): void;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: number): number;
    static nbit_rate_value_minus1(paramarg0: number): IntBuffer;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static ncbr_flag(paramarg0: number, paramarg1: number): number;
    static ncbr_flag(paramarg0: number): ByteBuffer;
    static ncbr_flag(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncbr_flag(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncpb_cnt_minus1(paramarg0: number): number;
    static ncpb_cnt_minus1(paramarg0: number, paramarg1: number): void;
    static ncpb_removal_delay_length_minus1(paramarg0: number): number;
    static ncpb_removal_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static ncpb_size_scale(paramarg0: number): number;
    static ncpb_size_scale(paramarg0: number, paramarg1: number): void;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: number): number;
    static ncpb_size_value_minus1(paramarg0: number): IntBuffer;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static ndpb_output_delay_length_minus1(paramarg0: number): number;
    static ndpb_output_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static ninitial_cpb_removal_delay_length_minus1(paramarg0: number): number;
    static ninitial_cpb_removal_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static ntime_offset_length(paramarg0: number): number;
    static ntime_offset_length(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bit_rate_scale(): number;
    bit_rate_scale(arg0: number): StdVideoH264HrdParameters;
    bit_rate_value_minus1(): IntBuffer;
    bit_rate_value_minus1(arg0: IntBuffer): StdVideoH264HrdParameters;
    bit_rate_value_minus1(arg0: number): number;
    bit_rate_value_minus1(arg0: number, arg1: number): StdVideoH264HrdParameters;
    cbr_flag(): ByteBuffer;
    cbr_flag(arg0: ByteBuffer): StdVideoH264HrdParameters;
    cbr_flag(arg0: number): number;
    cbr_flag(arg0: number, arg1: number): StdVideoH264HrdParameters;
    close(): void;
    cpb_cnt_minus1(): number;
    cpb_cnt_minus1(arg0: number): StdVideoH264HrdParameters;
    cpb_removal_delay_length_minus1(): number;
    cpb_removal_delay_length_minus1(arg0: number): StdVideoH264HrdParameters;
    cpb_size_scale(): number;
    cpb_size_scale(arg0: number): StdVideoH264HrdParameters;
    cpb_size_value_minus1(): IntBuffer;
    cpb_size_value_minus1(arg0: IntBuffer): StdVideoH264HrdParameters;
    cpb_size_value_minus1(arg0: number): number;
    cpb_size_value_minus1(arg0: number, arg1: number): StdVideoH264HrdParameters;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264HrdParameters;
    dpb_output_delay_length_minus1(): number;
    dpb_output_delay_length_minus1(arg0: number): StdVideoH264HrdParameters;
    initial_cpb_removal_delay_length_minus1(): number;
    initial_cpb_removal_delay_length_minus1(arg0: number): StdVideoH264HrdParameters;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer, arg4: IntBuffer, arg5: ByteBuffer, arg6: number, arg7: number, arg8: number, arg9: number): StdVideoH264HrdParameters;
    set(arg0: StdVideoH264HrdParameters): StdVideoH264HrdParameters;
    sizeof(): number;
    time_offset_length(): number;
    time_offset_length(arg0: number): StdVideoH264HrdParameters;
}