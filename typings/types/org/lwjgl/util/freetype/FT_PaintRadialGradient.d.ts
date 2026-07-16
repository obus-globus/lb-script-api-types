import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ColorLine } from '../../../../org/lwjgl/util/freetype/FT_ColorLine.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_PaintRadialGradient extends Struct<FT_PaintRadialGradient> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static C0: number;
    static C1: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORLINE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static R0: number;
    static R1: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_PaintRadialGradient;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintRadialGradient;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nc0(paramarg0: number): FT_Vector;
    static nc1(paramarg0: number): FT_Vector;
    static ncolorline(paramarg0: number): FT_ColorLine;
    static nr0(paramarg0: number): number;
    static nr1(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    c0(): FT_Vector;
    c1(): FT_Vector;
    colorline(): FT_ColorLine;
    create(arg0: number, arg1: ByteBuffer): FT_PaintRadialGradient;
    r0(): number;
    r1(): number;
    sizeof(): number;
}