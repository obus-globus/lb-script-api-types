import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Glyph_Metrics extends Struct<FT_Glyph_Metrics> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static HORIADVANCE: number;
    static HORIBEARINGX: number;
    static HORIBEARINGY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTADVANCE: number;
    static VERTBEARINGX: number;
    static VERTBEARINGY: number;
    static WIDTH: number;
    static create(paramarg0: number): FT_Glyph_Metrics;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Glyph_Metrics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nheight(paramarg0: number): number;
    static nhoriAdvance(paramarg0: number): number;
    static nhoriBearingX(paramarg0: number): number;
    static nhoriBearingY(paramarg0: number): number;
    static nvertAdvance(paramarg0: number): number;
    static nvertBearingX(paramarg0: number): number;
    static nvertBearingY(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_Glyph_Metrics;
    height(): number;
    horiAdvance(): number;
    horiBearingX(): number;
    horiBearingY(): number;
    sizeof(): number;
    vertAdvance(): number;
    vertBearingX(): number;
    vertBearingY(): number;
    width(): number;
}