import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeAV1OperatingPointInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1OperatingPointInfoFlags.d.ts'
export class StdVideoEncodeAV1OperatingPointInfo extends Struct<StdVideoEncodeAV1OperatingPointInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DECODER_BUFFER_DELAY: number;
    static ENCODER_BUFFER_DELAY: number;
    static FLAGS: number;
    static INITIAL_DISPLAY_DELAY_MINUS_1: number;
    static OPERATING_POINT_IDC: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEQ_LEVEL_IDX: number;
    static SEQ_TIER: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeAV1OperatingPointInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1OperatingPointInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1OperatingPointInfo;
    static create(paramarg0: number): StdVideoEncodeAV1OperatingPointInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1OperatingPointInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1OperatingPointInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1OperatingPointInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndecoder_buffer_delay(paramarg0: number): number;
    static ndecoder_buffer_delay(paramarg0: number, paramarg1: number): void;
    static nencoder_buffer_delay(paramarg0: number): number;
    static nencoder_buffer_delay(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeAV1OperatingPointInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeAV1OperatingPointInfoFlags): void;
    static ninitial_display_delay_minus_1(paramarg0: number): number;
    static ninitial_display_delay_minus_1(paramarg0: number, paramarg1: number): void;
    static noperating_point_idc(paramarg0: number): number;
    static noperating_point_idc(paramarg0: number, paramarg1: number): void;
    static nseq_level_idx(paramarg0: number): number;
    static nseq_level_idx(paramarg0: number, paramarg1: number): void;
    static nseq_tier(paramarg0: number): number;
    static nseq_tier(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1OperatingPointInfo;
    decoder_buffer_delay(): number;
    decoder_buffer_delay(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    encoder_buffer_delay(): number;
    encoder_buffer_delay(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    flags(): StdVideoEncodeAV1OperatingPointInfoFlags;
    flags(arg0: (param0: StdVideoEncodeAV1OperatingPointInfoFlags) => void): StdVideoEncodeAV1OperatingPointInfo;
    flags(arg0: StdVideoEncodeAV1OperatingPointInfoFlags): StdVideoEncodeAV1OperatingPointInfo;
    initial_display_delay_minus_1(): number;
    initial_display_delay_minus_1(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    operating_point_idc(): number;
    operating_point_idc(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    seq_level_idx(): number;
    seq_level_idx(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    seq_tier(): number;
    seq_tier(arg0: number): StdVideoEncodeAV1OperatingPointInfo;
    set(arg0: StdVideoEncodeAV1OperatingPointInfo): StdVideoEncodeAV1OperatingPointInfo;
    set(arg0: StdVideoEncodeAV1OperatingPointInfoFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): StdVideoEncodeAV1OperatingPointInfo;
    sizeof(): number;
}