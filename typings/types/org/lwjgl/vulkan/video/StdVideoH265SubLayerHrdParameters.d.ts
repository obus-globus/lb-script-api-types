import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265SubLayerHrdParameters extends Struct<StdVideoH265SubLayerHrdParameters> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BIT_RATE_DU_VALUE_MINUS1: number;
    static BIT_RATE_VALUE_MINUS1: number;
    static CBR_FLAG: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CPB_SIZE_DU_VALUE_MINUS1: number;
    static CPB_SIZE_VALUE_MINUS1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265SubLayerHrdParameters;
    static calloc(paramarg0: MemoryStack): StdVideoH265SubLayerHrdParameters;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265SubLayerHrdParameters;
    static create(paramarg0: number): StdVideoH265SubLayerHrdParameters;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265SubLayerHrdParameters;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265SubLayerHrdParameters;
    static malloc(paramarg0: MemoryStack): StdVideoH265SubLayerHrdParameters;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbit_rate_du_value_minus1(paramarg0: number, paramarg1: number): number;
    static nbit_rate_du_value_minus1(paramarg0: number): IntBuffer;
    static nbit_rate_du_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nbit_rate_du_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: number): number;
    static nbit_rate_value_minus1(paramarg0: number): IntBuffer;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nbit_rate_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static ncbr_flag(paramarg0: number): number;
    static ncbr_flag(paramarg0: number, paramarg1: number): void;
    static ncpb_size_du_value_minus1(paramarg0: number, paramarg1: number): number;
    static ncpb_size_du_value_minus1(paramarg0: number): IntBuffer;
    static ncpb_size_du_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncpb_size_du_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: number): number;
    static ncpb_size_value_minus1(paramarg0: number): IntBuffer;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncpb_size_value_minus1(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bit_rate_du_value_minus1(): IntBuffer;
    bit_rate_du_value_minus1(arg0: IntBuffer): StdVideoH265SubLayerHrdParameters;
    bit_rate_du_value_minus1(arg0: number): number;
    bit_rate_du_value_minus1(arg0: number, arg1: number): StdVideoH265SubLayerHrdParameters;
    bit_rate_value_minus1(): IntBuffer;
    bit_rate_value_minus1(arg0: IntBuffer): StdVideoH265SubLayerHrdParameters;
    bit_rate_value_minus1(arg0: number): number;
    bit_rate_value_minus1(arg0: number, arg1: number): StdVideoH265SubLayerHrdParameters;
    cbr_flag(): number;
    cbr_flag(arg0: number): StdVideoH265SubLayerHrdParameters;
    close(): void;
    cpb_size_du_value_minus1(): IntBuffer;
    cpb_size_du_value_minus1(arg0: IntBuffer): StdVideoH265SubLayerHrdParameters;
    cpb_size_du_value_minus1(arg0: number): number;
    cpb_size_du_value_minus1(arg0: number, arg1: number): StdVideoH265SubLayerHrdParameters;
    cpb_size_value_minus1(): IntBuffer;
    cpb_size_value_minus1(arg0: IntBuffer): StdVideoH265SubLayerHrdParameters;
    cpb_size_value_minus1(arg0: number): number;
    cpb_size_value_minus1(arg0: number, arg1: number): StdVideoH265SubLayerHrdParameters;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265SubLayerHrdParameters;
    set(arg0: IntBuffer, arg1: IntBuffer, arg2: IntBuffer, arg3: IntBuffer, arg4: number): StdVideoH265SubLayerHrdParameters;
    set(arg0: StdVideoH265SubLayerHrdParameters): StdVideoH265SubLayerHrdParameters;
    sizeof(): number;
}