import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Color extends Struct<FT_Color> implements NativeResource {
    static ALIGNOF: number;
    static ALPHA: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLUE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GREEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RED: number;
    static SIZEOF: number;
    static calloc(): FT_Color;
    static calloc(paramarg0: MemoryStack): FT_Color;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Color;
    static create(paramarg0: number): FT_Color;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Color;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Color;
    static malloc(paramarg0: MemoryStack): FT_Color;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalpha(paramarg0: number): number;
    static nalpha(paramarg0: number, paramarg1: number): void;
    static nblue(paramarg0: number): number;
    static nblue(paramarg0: number, paramarg1: number): void;
    static ngreen(paramarg0: number): number;
    static ngreen(paramarg0: number, paramarg1: number): void;
    static nred(paramarg0: number): number;
    static nred(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alpha(): number;
    alpha(arg0: number): FT_Color;
    blue(): number;
    blue(arg0: number): FT_Color;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Color;
    green(): number;
    green(arg0: number): FT_Color;
    red(): number;
    red(arg0: number): FT_Color;
    set(arg0: number, arg1: number, arg2: number, arg3: number): FT_Color;
    set(arg0: FT_Color): FT_Color;
    sizeof(): number;
}