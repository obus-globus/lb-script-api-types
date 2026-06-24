import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeAV1OperatingPointInfoFlags extends Struct<StdVideoEncodeAV1OperatingPointInfoFlags> implements NativeResource {
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
    static calloc(): StdVideoEncodeAV1OperatingPointInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1OperatingPointInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1OperatingPointInfoFlags;
    static create(paramarg0: number): StdVideoEncodeAV1OperatingPointInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1OperatingPointInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1OperatingPointInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1OperatingPointInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static ndecoder_model_present_for_this_op(paramarg0: number): number;
    static ndecoder_model_present_for_this_op(paramarg0: number, paramarg1: number): void;
    static ninitial_display_delay_present_for_this_op(paramarg0: number): number;
    static ninitial_display_delay_present_for_this_op(paramarg0: number, paramarg1: number): void;
    static nlow_delay_mode_flag(paramarg0: number): number;
    static nlow_delay_mode_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1OperatingPointInfoFlags;
    decoder_model_present_for_this_op(): boolean;
    decoder_model_present_for_this_op(arg0: boolean): StdVideoEncodeAV1OperatingPointInfoFlags;
    initial_display_delay_present_for_this_op(): boolean;
    initial_display_delay_present_for_this_op(arg0: boolean): StdVideoEncodeAV1OperatingPointInfoFlags;
    low_delay_mode_flag(): boolean;
    low_delay_mode_flag(arg0: boolean): StdVideoEncodeAV1OperatingPointInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean): StdVideoEncodeAV1OperatingPointInfoFlags;
    set(arg0: StdVideoEncodeAV1OperatingPointInfoFlags): StdVideoEncodeAV1OperatingPointInfoFlags;
    sizeof(): number;
}