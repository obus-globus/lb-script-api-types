import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ColorLine } from '../../../../org/lwjgl/util/freetype/FT_ColorLine.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_PaintSweepGradient extends Struct<FT_PaintSweepGradient> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CENTER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORLINE: number;
    static END_ANGLE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static START_ANGLE: number;
    static create(paramarg0: number): FT_PaintSweepGradient;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintSweepGradient;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncenter(paramarg0: number): FT_Vector;
    static ncolorline(paramarg0: number): FT_ColorLine;
    static nend_angle(paramarg0: number): number;
    static nstart_angle(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    center(): FT_Vector;
    colorline(): FT_ColorLine;
    create(arg0: number, arg1: ByteBuffer): FT_PaintSweepGradient;
    end_angle(): number;
    sizeof(): number;
    start_angle(): number;
}