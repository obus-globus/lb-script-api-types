import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoVP9LoopFilterFlags extends Struct<StdVideoVP9LoopFilterFlags> implements NativeResource {
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
    static calloc(): StdVideoVP9LoopFilterFlags;
    static calloc(paramarg0: MemoryStack): StdVideoVP9LoopFilterFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoVP9LoopFilterFlags;
    static create(paramarg0: number): StdVideoVP9LoopFilterFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoVP9LoopFilterFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoVP9LoopFilterFlags;
    static malloc(paramarg0: MemoryStack): StdVideoVP9LoopFilterFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nloop_filter_delta_enabled(paramarg0: number): number;
    static nloop_filter_delta_enabled(paramarg0: number, paramarg1: number): void;
    static nloop_filter_delta_update(paramarg0: number): number;
    static nloop_filter_delta_update(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoVP9LoopFilterFlags;
    loop_filter_delta_enabled(): boolean;
    loop_filter_delta_enabled(arg0: boolean): StdVideoVP9LoopFilterFlags;
    loop_filter_delta_update(): boolean;
    loop_filter_delta_update(arg0: boolean): StdVideoVP9LoopFilterFlags;
    set(arg0: boolean, arg1: boolean): StdVideoVP9LoopFilterFlags;
    set(arg0: StdVideoVP9LoopFilterFlags): StdVideoVP9LoopFilterFlags;
    sizeof(): number;
}