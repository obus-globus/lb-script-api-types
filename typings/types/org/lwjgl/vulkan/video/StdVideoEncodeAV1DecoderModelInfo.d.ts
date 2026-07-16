import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeAV1DecoderModelInfo extends Struct<StdVideoEncodeAV1DecoderModelInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER_DELAY_LENGTH_MINUS_1: number;
    static BUFFER_REMOVAL_TIME_LENGTH_MINUS_1: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAME_PRESENTATION_TIME_LENGTH_MINUS_1: number;
    static NUM_UNITS_IN_DECODING_TICK: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeAV1DecoderModelInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1DecoderModelInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1DecoderModelInfo;
    static create(paramarg0: number): StdVideoEncodeAV1DecoderModelInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1DecoderModelInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1DecoderModelInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1DecoderModelInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer_delay_length_minus_1(paramarg0: number): number;
    static nbuffer_delay_length_minus_1(paramarg0: number, paramarg1: number): void;
    static nbuffer_removal_time_length_minus_1(paramarg0: number): number;
    static nbuffer_removal_time_length_minus_1(paramarg0: number, paramarg1: number): void;
    static nframe_presentation_time_length_minus_1(paramarg0: number): number;
    static nframe_presentation_time_length_minus_1(paramarg0: number, paramarg1: number): void;
    static nnum_units_in_decoding_tick(paramarg0: number): number;
    static nnum_units_in_decoding_tick(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer_delay_length_minus_1(): number;
    buffer_delay_length_minus_1(arg0: number): StdVideoEncodeAV1DecoderModelInfo;
    buffer_removal_time_length_minus_1(): number;
    buffer_removal_time_length_minus_1(arg0: number): StdVideoEncodeAV1DecoderModelInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1DecoderModelInfo;
    frame_presentation_time_length_minus_1(): number;
    frame_presentation_time_length_minus_1(arg0: number): StdVideoEncodeAV1DecoderModelInfo;
    num_units_in_decoding_tick(): number;
    num_units_in_decoding_tick(arg0: number): StdVideoEncodeAV1DecoderModelInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number): StdVideoEncodeAV1DecoderModelInfo;
    set(arg0: StdVideoEncodeAV1DecoderModelInfo): StdVideoEncodeAV1DecoderModelInfo;
    sizeof(): number;
}