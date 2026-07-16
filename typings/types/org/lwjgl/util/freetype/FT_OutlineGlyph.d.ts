import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Glyph } from '../../../../org/lwjgl/util/freetype/FT_Glyph.d.ts'
import type { FT_Outline } from '../../../../org/lwjgl/util/freetype/FT_Outline.d.ts'
export class FT_OutlineGlyph extends Struct<FT_OutlineGlyph> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OUTLINE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROOT: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_OutlineGlyph;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_OutlineGlyph;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static noutline(paramarg0: number): FT_Outline;
    static nroot(paramarg0: number): FT_Glyph;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_OutlineGlyph;
    outline(): FT_Outline;
    root(): FT_Glyph;
    sizeof(): number;
}