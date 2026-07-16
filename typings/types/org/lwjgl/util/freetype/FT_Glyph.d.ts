import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_Glyph extends Struct<FT_Glyph> {
    static ADVANCE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLAZZ: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static LIBRARY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_Glyph;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Glyph;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nadvance(paramarg0: number): FT_Vector;
    static nclazz(paramarg0: number): number;
    static nformat(paramarg0: number): number;
    static nlibrary(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advance(): FT_Vector;
    create(arg0: number, arg1: ByteBuffer): FT_Glyph;
    format(): number;
    library(): number;
    sizeof(): number;
}