import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1ColorConfigFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1ColorConfigFlags.d.ts'
export class StdVideoAV1ColorConfig extends Struct<StdVideoAV1ColorConfig> implements NativeResource {
    static ALIGNOF: number;
    static BITDEPTH: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMA_SAMPLE_POSITION: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR_PRIMARIES: number;
    static FLAGS: number;
    static MATRIX_COEFFICIENTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static SUBSAMPLING_X: number;
    static SUBSAMPLING_Y: number;
    static TRANSFER_CHARACTERISTICS: number;
    static calloc(): StdVideoAV1ColorConfig;
    static calloc(paramarg0: MemoryStack): StdVideoAV1ColorConfig;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1ColorConfig;
    static create(paramarg0: number): StdVideoAV1ColorConfig;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1ColorConfig;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1ColorConfig;
    static malloc(paramarg0: MemoryStack): StdVideoAV1ColorConfig;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nBitDepth(paramarg0: number): number;
    static nBitDepth(paramarg0: number, paramarg1: number): void;
    static nchroma_sample_position(paramarg0: number): number;
    static nchroma_sample_position(paramarg0: number, paramarg1: number): void;
    static ncolor_primaries(paramarg0: number): number;
    static ncolor_primaries(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoAV1ColorConfigFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1ColorConfigFlags): void;
    static nmatrix_coefficients(paramarg0: number): number;
    static nmatrix_coefficients(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static nsubsampling_x(paramarg0: number): number;
    static nsubsampling_x(paramarg0: number, paramarg1: number): void;
    static nsubsampling_y(paramarg0: number): number;
    static nsubsampling_y(paramarg0: number, paramarg1: number): void;
    static ntransfer_characteristics(paramarg0: number): number;
    static ntransfer_characteristics(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    BitDepth(): number;
    BitDepth(arg0: number): StdVideoAV1ColorConfig;
    chroma_sample_position(): number;
    chroma_sample_position(arg0: number): StdVideoAV1ColorConfig;
    close(): void;
    color_primaries(): number;
    color_primaries(arg0: number): StdVideoAV1ColorConfig;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1ColorConfig;
    flags(): StdVideoAV1ColorConfigFlags;
    flags(arg0: (param0: StdVideoAV1ColorConfigFlags) => void): StdVideoAV1ColorConfig;
    flags(arg0: StdVideoAV1ColorConfigFlags): StdVideoAV1ColorConfig;
    matrix_coefficients(): number;
    matrix_coefficients(arg0: number): StdVideoAV1ColorConfig;
    set(arg0: StdVideoAV1ColorConfig): StdVideoAV1ColorConfig;
    set(arg0: StdVideoAV1ColorConfigFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): StdVideoAV1ColorConfig;
    sizeof(): number;
    subsampling_x(): number;
    subsampling_x(arg0: number): StdVideoAV1ColorConfig;
    subsampling_y(): number;
    subsampling_y(arg0: number): StdVideoAV1ColorConfig;
    transfer_characteristics(): number;
    transfer_characteristics(arg0: number): StdVideoAV1ColorConfig;
}