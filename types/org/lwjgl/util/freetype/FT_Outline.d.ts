import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Outline extends Struct<FT_Outline> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTOURS: number;
    static FLAGS: number;
    static N_CONTOURS: number;
    static N_POINTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POINTS: number;
    static SIZEOF: number;
    static TAGS: number;
    static calloc(): FT_Outline;
    static calloc(paramarg0: MemoryStack): FT_Outline;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Outline;
    static create(paramarg0: number): FT_Outline;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Outline;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Outline;
    static malloc(paramarg0: MemoryStack): FT_Outline;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncontours(paramarg0: number): ShortBuffer;
    static nflags(paramarg0: number): number;
    static nn_contours(paramarg0: number): number;
    static nn_points(paramarg0: number): number;
    static npoints(paramarg0: number): (Object | null)[];
    static ntags(paramarg0: number): ByteBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    contours(): ShortBuffer;
    create(arg0: number, arg1: ByteBuffer): FT_Outline;
    flags(): number;
    n_contours(): number;
    n_points(): number;
    points(): (Object | null)[];
    sizeof(): number;
    tags(): ByteBuffer;
}