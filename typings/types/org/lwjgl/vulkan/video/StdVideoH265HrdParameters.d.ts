import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH265HrdFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoH265HrdFlags.d.ts'
import type { StdVideoH265SubLayerHrdParameters } from '../../../../org/lwjgl/vulkan/video/StdVideoH265SubLayerHrdParameters.d.ts'
export class StdVideoH265HrdParameters extends Struct<StdVideoH265HrdParameters> implements NativeResource {
    static ALIGNOF: number;
    static AU_CPB_REMOVAL_DELAY_LENGTH_MINUS1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BIT_RATE_SCALE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CPB_CNT_MINUS1: number;
    static CPB_SIZE_DU_SCALE: number;
    static CPB_SIZE_SCALE: number;
    static DPB_OUTPUT_DELAY_DU_LENGTH_MINUS1: number;
    static DPB_OUTPUT_DELAY_LENGTH_MINUS1: number;
    static DU_CPB_REMOVAL_DELAY_INCREMENT_LENGTH_MINUS1: number;
    static ELEMENTAL_DURATION_IN_TC_MINUS1: number;
    static FLAGS: number;
    static INITIAL_CPB_REMOVAL_DELAY_LENGTH_MINUS1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSUBLAYERHRDPARAMETERSNAL: number;
    static PSUBLAYERHRDPARAMETERSVCL: number;
    static RESERVED: number;
    static SIZEOF: number;
    static TICK_DIVISOR_MINUS2: number;
    static calloc(): StdVideoH265HrdParameters;
    static calloc(paramarg0: MemoryStack): StdVideoH265HrdParameters;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265HrdParameters;
    static create(paramarg0: number): StdVideoH265HrdParameters;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265HrdParameters;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265HrdParameters;
    static malloc(paramarg0: MemoryStack): StdVideoH265HrdParameters;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nau_cpb_removal_delay_length_minus1(paramarg0: number): number;
    static nau_cpb_removal_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static nbit_rate_scale(paramarg0: number): number;
    static nbit_rate_scale(paramarg0: number, paramarg1: number): void;
    static ncpb_cnt_minus1(paramarg0: number, paramarg1: number): number;
    static ncpb_cnt_minus1(paramarg0: number): ByteBuffer;
    static ncpb_cnt_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncpb_cnt_minus1(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncpb_size_du_scale(paramarg0: number): number;
    static ncpb_size_du_scale(paramarg0: number, paramarg1: number): void;
    static ncpb_size_scale(paramarg0: number): number;
    static ncpb_size_scale(paramarg0: number, paramarg1: number): void;
    static ndpb_output_delay_du_length_minus1(paramarg0: number): number;
    static ndpb_output_delay_du_length_minus1(paramarg0: number, paramarg1: number): void;
    static ndpb_output_delay_length_minus1(paramarg0: number): number;
    static ndpb_output_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static ndu_cpb_removal_delay_increment_length_minus1(paramarg0: number): number;
    static ndu_cpb_removal_delay_increment_length_minus1(paramarg0: number, paramarg1: number): void;
    static nelemental_duration_in_tc_minus1(paramarg0: number): ShortBuffer;
    static nelemental_duration_in_tc_minus1(paramarg0: number, paramarg1: number): number;
    static nelemental_duration_in_tc_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nelemental_duration_in_tc_minus1(paramarg0: number, paramarg1: ShortBuffer): void;
    static nflags(paramarg0: number): StdVideoH265HrdFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoH265HrdFlags): void;
    static ninitial_cpb_removal_delay_length_minus1(paramarg0: number): number;
    static ninitial_cpb_removal_delay_length_minus1(paramarg0: number, paramarg1: number): void;
    static npSubLayerHrdParametersNal(paramarg0: number): StdVideoH265SubLayerHrdParameters;
    static npSubLayerHrdParametersNal(paramarg0: number, paramarg1: StdVideoH265SubLayerHrdParameters): void;
    static npSubLayerHrdParametersVcl(paramarg0: number): StdVideoH265SubLayerHrdParameters;
    static npSubLayerHrdParametersVcl(paramarg0: number, paramarg1: StdVideoH265SubLayerHrdParameters): void;
    static nreserved(paramarg0: number): ShortBuffer;
    static nreserved(paramarg0: number, paramarg1: number): number;
    static nreserved(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved(paramarg0: number, paramarg1: ShortBuffer): void;
    static ntick_divisor_minus2(paramarg0: number): number;
    static ntick_divisor_minus2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    au_cpb_removal_delay_length_minus1(): number;
    au_cpb_removal_delay_length_minus1(arg0: number): StdVideoH265HrdParameters;
    bit_rate_scale(): number;
    bit_rate_scale(arg0: number): StdVideoH265HrdParameters;
    close(): void;
    cpb_cnt_minus1(): ByteBuffer;
    cpb_cnt_minus1(arg0: ByteBuffer): StdVideoH265HrdParameters;
    cpb_cnt_minus1(arg0: number): number;
    cpb_cnt_minus1(arg0: number, arg1: number): StdVideoH265HrdParameters;
    cpb_size_du_scale(): number;
    cpb_size_du_scale(arg0: number): StdVideoH265HrdParameters;
    cpb_size_scale(): number;
    cpb_size_scale(arg0: number): StdVideoH265HrdParameters;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265HrdParameters;
    dpb_output_delay_du_length_minus1(): number;
    dpb_output_delay_du_length_minus1(arg0: number): StdVideoH265HrdParameters;
    dpb_output_delay_length_minus1(): number;
    dpb_output_delay_length_minus1(arg0: number): StdVideoH265HrdParameters;
    du_cpb_removal_delay_increment_length_minus1(): number;
    du_cpb_removal_delay_increment_length_minus1(arg0: number): StdVideoH265HrdParameters;
    elemental_duration_in_tc_minus1(): ShortBuffer;
    elemental_duration_in_tc_minus1(arg0: ShortBuffer): StdVideoH265HrdParameters;
    elemental_duration_in_tc_minus1(arg0: number): number;
    elemental_duration_in_tc_minus1(arg0: number, arg1: number): StdVideoH265HrdParameters;
    flags(): StdVideoH265HrdFlags;
    flags(arg0: (param0: StdVideoH265HrdFlags) => void): StdVideoH265HrdParameters;
    flags(arg0: StdVideoH265HrdFlags): StdVideoH265HrdParameters;
    initial_cpb_removal_delay_length_minus1(): number;
    initial_cpb_removal_delay_length_minus1(arg0: number): StdVideoH265HrdParameters;
    pSubLayerHrdParametersNal(): StdVideoH265SubLayerHrdParameters;
    pSubLayerHrdParametersNal(arg0: StdVideoH265SubLayerHrdParameters): StdVideoH265HrdParameters;
    pSubLayerHrdParametersVcl(): StdVideoH265SubLayerHrdParameters;
    pSubLayerHrdParametersVcl(arg0: StdVideoH265SubLayerHrdParameters): StdVideoH265HrdParameters;
    set(arg0: StdVideoH265HrdFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: ByteBuffer, arg11: ShortBuffer, arg12: StdVideoH265SubLayerHrdParameters, arg13: StdVideoH265SubLayerHrdParameters): StdVideoH265HrdParameters;
    set(arg0: StdVideoH265HrdParameters): StdVideoH265HrdParameters;
    sizeof(): number;
    tick_divisor_minus2(): number;
    tick_divisor_minus2(arg0: number): StdVideoH265HrdParameters;
}