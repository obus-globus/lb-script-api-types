import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
export class FT_Prop_GlyphToScriptMap extends Struct<FT_Prop_GlyphToScriptMap> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FACE: number;
    static MAP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_Prop_GlyphToScriptMap;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Prop_GlyphToScriptMap;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nface(paramarg0: number): FT_Face;
    static nmap(paramarg0: number, paramarg1: number): ShortBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_Prop_GlyphToScriptMap;
    face(): FT_Face;
    map(arg0: number): ShortBuffer;
    sizeof(): number;
}