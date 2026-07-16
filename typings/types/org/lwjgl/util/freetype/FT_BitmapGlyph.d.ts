import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Bitmap } from '../../../../org/lwjgl/util/freetype/FT_Bitmap.d.ts'
import type { FT_Glyph } from '../../../../org/lwjgl/util/freetype/FT_Glyph.d.ts'
export class FT_BitmapGlyph extends Struct<FT_BitmapGlyph> {
    static ALIGNOF: number;
    static BITMAP: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LEFT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROOT: number;
    static SIZEOF: number;
    static TOP: number;
    static create(paramarg0: number): FT_BitmapGlyph;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_BitmapGlyph;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nbitmap(paramarg0: number): FT_Bitmap;
    static nleft(paramarg0: number): number;
    static nroot(paramarg0: number): FT_Glyph;
    static ntop(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bitmap(): FT_Bitmap;
    create(arg0: number, arg1: ByteBuffer): FT_BitmapGlyph;
    left(): number;
    root(): FT_Glyph;
    sizeof(): number;
    top(): number;
}