import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ColorLine } from '../../../../org/lwjgl/util/freetype/FT_ColorLine.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_PaintLinearGradient extends Struct<FT_PaintLinearGradient> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORLINE: number;
    static P0: number;
    static P1: number;
    static P2: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_PaintLinearGradient;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintLinearGradient;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncolorline(paramarg0: number): FT_ColorLine;
    static np0(paramarg0: number): FT_Vector;
    static np1(paramarg0: number): FT_Vector;
    static np2(paramarg0: number): FT_Vector;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    colorline(): FT_ColorLine;
    create(arg0: number, arg1: ByteBuffer): FT_PaintLinearGradient;
    p0(): FT_Vector;
    p1(): FT_Vector;
    p2(): FT_Vector;
    sizeof(): number;
}