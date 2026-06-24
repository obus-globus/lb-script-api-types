import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoVP9ColorConfigFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoVP9ColorConfigFlags.d.ts'
export class StdVideoVP9ColorConfig extends Struct<StdVideoVP9ColorConfig> implements NativeResource {
    static ALIGNOF: number;
    static BITDEPTH: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR_SPACE: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static SUBSAMPLING_X: number;
    static SUBSAMPLING_Y: number;
    static calloc(): StdVideoVP9ColorConfig;
    static calloc(paramarg0: MemoryStack): StdVideoVP9ColorConfig;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoVP9ColorConfig;
    static create(paramarg0: number): StdVideoVP9ColorConfig;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoVP9ColorConfig;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoVP9ColorConfig;
    static malloc(paramarg0: MemoryStack): StdVideoVP9ColorConfig;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nBitDepth(paramarg0: number): number;
    static nBitDepth(paramarg0: number, paramarg1: number): void;
    static ncolor_space(paramarg0: number): number;
    static ncolor_space(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoVP9ColorConfigFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoVP9ColorConfigFlags): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nsubsampling_x(paramarg0: number): number;
    static nsubsampling_x(paramarg0: number, paramarg1: number): void;
    static nsubsampling_y(paramarg0: number): number;
    static nsubsampling_y(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    BitDepth(): number;
    BitDepth(arg0: number): StdVideoVP9ColorConfig;
    close(): void;
    color_space(): number;
    color_space(arg0: number): StdVideoVP9ColorConfig;
    create(arg0: number, arg1: ByteBuffer): StdVideoVP9ColorConfig;
    flags(): StdVideoVP9ColorConfigFlags;
    flags(arg0: (param0: StdVideoVP9ColorConfigFlags) => void): StdVideoVP9ColorConfig;
    flags(arg0: StdVideoVP9ColorConfigFlags): StdVideoVP9ColorConfig;
    set(arg0: StdVideoVP9ColorConfig): StdVideoVP9ColorConfig;
    set(arg0: StdVideoVP9ColorConfigFlags, arg1: number, arg2: number, arg3: number, arg4: number): StdVideoVP9ColorConfig;
    sizeof(): number;
    subsampling_x(): number;
    subsampling_x(arg0: number): StdVideoVP9ColorConfig;
    subsampling_y(): number;
    subsampling_y(arg0: number): StdVideoVP9ColorConfig;
}