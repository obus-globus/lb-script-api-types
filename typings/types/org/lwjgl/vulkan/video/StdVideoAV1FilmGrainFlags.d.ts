import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1FilmGrainFlags extends Struct<StdVideoAV1FilmGrainFlags> implements NativeResource {
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
    static calloc(): StdVideoAV1FilmGrainFlags;
    static calloc(paramarg0: MemoryStack): StdVideoAV1FilmGrainFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1FilmGrainFlags;
    static create(paramarg0: number): StdVideoAV1FilmGrainFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1FilmGrainFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1FilmGrainFlags;
    static malloc(paramarg0: MemoryStack): StdVideoAV1FilmGrainFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nchroma_scaling_from_luma(paramarg0: number): number;
    static nchroma_scaling_from_luma(paramarg0: number, paramarg1: number): void;
    static nclip_to_restricted_range(paramarg0: number): number;
    static nclip_to_restricted_range(paramarg0: number, paramarg1: number): void;
    static noverlap_flag(paramarg0: number): number;
    static noverlap_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nupdate_grain(paramarg0: number): number;
    static nupdate_grain(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chroma_scaling_from_luma(): boolean;
    chroma_scaling_from_luma(arg0: boolean): StdVideoAV1FilmGrainFlags;
    clip_to_restricted_range(): boolean;
    clip_to_restricted_range(arg0: boolean): StdVideoAV1FilmGrainFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1FilmGrainFlags;
    overlap_flag(): boolean;
    overlap_flag(arg0: boolean): StdVideoAV1FilmGrainFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoAV1FilmGrainFlags;
    set(arg0: StdVideoAV1FilmGrainFlags): StdVideoAV1FilmGrainFlags;
    sizeof(): number;
    update_grain(): boolean;
    update_grain(arg0: boolean): StdVideoAV1FilmGrainFlags;
}