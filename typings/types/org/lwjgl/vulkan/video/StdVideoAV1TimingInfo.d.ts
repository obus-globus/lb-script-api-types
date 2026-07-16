import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1TimingInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1TimingInfoFlags.d.ts'
export class StdVideoAV1TimingInfo extends Struct<StdVideoAV1TimingInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static NUM_TICKS_PER_PICTURE_MINUS_1: number;
    static NUM_UNITS_IN_DISPLAY_TICK: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TIME_SCALE: number;
    static calloc(): StdVideoAV1TimingInfo;
    static calloc(paramarg0: MemoryStack): StdVideoAV1TimingInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1TimingInfo;
    static create(paramarg0: number): StdVideoAV1TimingInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1TimingInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1TimingInfo;
    static malloc(paramarg0: MemoryStack): StdVideoAV1TimingInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): StdVideoAV1TimingInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1TimingInfoFlags): void;
    static nnum_ticks_per_picture_minus_1(paramarg0: number): number;
    static nnum_ticks_per_picture_minus_1(paramarg0: number, paramarg1: number): void;
    static nnum_units_in_display_tick(paramarg0: number): number;
    static nnum_units_in_display_tick(paramarg0: number, paramarg1: number): void;
    static ntime_scale(paramarg0: number): number;
    static ntime_scale(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1TimingInfo;
    flags(): StdVideoAV1TimingInfoFlags;
    flags(arg0: (param0: StdVideoAV1TimingInfoFlags) => void): StdVideoAV1TimingInfo;
    flags(arg0: StdVideoAV1TimingInfoFlags): StdVideoAV1TimingInfo;
    num_ticks_per_picture_minus_1(): number;
    num_ticks_per_picture_minus_1(arg0: number): StdVideoAV1TimingInfo;
    num_units_in_display_tick(): number;
    num_units_in_display_tick(arg0: number): StdVideoAV1TimingInfo;
    set(arg0: StdVideoAV1TimingInfo): StdVideoAV1TimingInfo;
    set(arg0: StdVideoAV1TimingInfoFlags, arg1: number, arg2: number, arg3: number): StdVideoAV1TimingInfo;
    sizeof(): number;
    time_scale(): number;
    time_scale(arg0: number): StdVideoAV1TimingInfo;
}