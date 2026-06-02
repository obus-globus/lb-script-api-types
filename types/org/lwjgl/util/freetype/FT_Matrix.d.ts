import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Matrix extends Struct<FT_Matrix> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static XX: number;
    static XY: number;
    static YX: number;
    static YY: number;
    static calloc(): FT_Matrix;
    static calloc(paramarg0: MemoryStack): FT_Matrix;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Matrix;
    static create(paramarg0: number): FT_Matrix;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Matrix;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Matrix;
    static malloc(paramarg0: MemoryStack): FT_Matrix;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nxx(paramarg0: number): number;
    static nxx(paramarg0: number, paramarg1: number): void;
    static nxy(paramarg0: number): number;
    static nxy(paramarg0: number, paramarg1: number): void;
    static nyx(paramarg0: number): number;
    static nyx(paramarg0: number, paramarg1: number): void;
    static nyy(paramarg0: number): number;
    static nyy(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Matrix;
    set(arg0: number, arg1: number, arg2: number, arg3: number): FT_Matrix;
    set(arg0: FT_Matrix): FT_Matrix;
    sizeof(): number;
    xx(): number;
    xx(arg0: number): FT_Matrix;
    xy(): number;
    xy(arg0: number): FT_Matrix;
    yx(): number;
    yx(arg0: number): FT_Matrix;
    yy(): number;
    yy(arg0: number): FT_Matrix;
}