import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1LoopFilterFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1LoopFilterFlags.d.ts'
export class StdVideoAV1LoopFilter extends Struct<StdVideoAV1LoopFilter> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LOOP_FILTER_LEVEL: number;
    static LOOP_FILTER_MODE_DELTAS: number;
    static LOOP_FILTER_REF_DELTAS: number;
    static LOOP_FILTER_SHARPNESS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UPDATE_MODE_DELTA: number;
    static UPDATE_REF_DELTA: number;
    static calloc(): StdVideoAV1LoopFilter;
    static calloc(paramarg0: MemoryStack): StdVideoAV1LoopFilter;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1LoopFilter;
    static create(paramarg0: number): StdVideoAV1LoopFilter;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1LoopFilter;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1LoopFilter;
    static malloc(paramarg0: MemoryStack): StdVideoAV1LoopFilter;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): StdVideoAV1LoopFilterFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1LoopFilterFlags): void;
    static nloop_filter_level(paramarg0: number, paramarg1: number): number;
    static nloop_filter_level(paramarg0: number): ByteBuffer;
    static nloop_filter_level(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nloop_filter_level(paramarg0: number, paramarg1: ByteBuffer): void;
    static nloop_filter_mode_deltas(paramarg0: number, paramarg1: number): number;
    static nloop_filter_mode_deltas(paramarg0: number): ByteBuffer;
    static nloop_filter_mode_deltas(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nloop_filter_mode_deltas(paramarg0: number, paramarg1: ByteBuffer): void;
    static nloop_filter_ref_deltas(paramarg0: number, paramarg1: number): number;
    static nloop_filter_ref_deltas(paramarg0: number): ByteBuffer;
    static nloop_filter_ref_deltas(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nloop_filter_ref_deltas(paramarg0: number, paramarg1: ByteBuffer): void;
    static nloop_filter_sharpness(paramarg0: number): number;
    static nloop_filter_sharpness(paramarg0: number, paramarg1: number): void;
    static nupdate_mode_delta(paramarg0: number): number;
    static nupdate_mode_delta(paramarg0: number, paramarg1: number): void;
    static nupdate_ref_delta(paramarg0: number): number;
    static nupdate_ref_delta(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1LoopFilter;
    flags(): StdVideoAV1LoopFilterFlags;
    flags(arg0: (param0: StdVideoAV1LoopFilterFlags) => void): StdVideoAV1LoopFilter;
    flags(arg0: StdVideoAV1LoopFilterFlags): StdVideoAV1LoopFilter;
    loop_filter_level(): ByteBuffer;
    loop_filter_level(arg0: ByteBuffer): StdVideoAV1LoopFilter;
    loop_filter_level(arg0: number): number;
    loop_filter_level(arg0: number, arg1: number): StdVideoAV1LoopFilter;
    loop_filter_mode_deltas(): ByteBuffer;
    loop_filter_mode_deltas(arg0: ByteBuffer): StdVideoAV1LoopFilter;
    loop_filter_mode_deltas(arg0: number): number;
    loop_filter_mode_deltas(arg0: number, arg1: number): StdVideoAV1LoopFilter;
    loop_filter_ref_deltas(): ByteBuffer;
    loop_filter_ref_deltas(arg0: ByteBuffer): StdVideoAV1LoopFilter;
    loop_filter_ref_deltas(arg0: number): number;
    loop_filter_ref_deltas(arg0: number, arg1: number): StdVideoAV1LoopFilter;
    loop_filter_sharpness(): number;
    loop_filter_sharpness(arg0: number): StdVideoAV1LoopFilter;
    set(arg0: StdVideoAV1LoopFilter): StdVideoAV1LoopFilter;
    set(arg0: StdVideoAV1LoopFilterFlags, arg1: ByteBuffer, arg2: number, arg3: number, arg4: ByteBuffer, arg5: number, arg6: ByteBuffer): StdVideoAV1LoopFilter;
    sizeof(): number;
    update_mode_delta(): number;
    update_mode_delta(arg0: number): StdVideoAV1LoopFilter;
    update_ref_delta(): number;
    update_ref_delta(arg0: number): StdVideoAV1LoopFilter;
}