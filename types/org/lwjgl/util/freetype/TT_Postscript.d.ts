import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TT_Postscript extends Struct<TT_Postscript> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMATTYPE: number;
    static ISFIXEDPITCH: number;
    static ITALICANGLE: number;
    static MAXMEMTYPE1: number;
    static MAXMEMTYPE42: number;
    static MINMEMTYPE1: number;
    static MINMEMTYPE42: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UNDERLINEPOSITION: number;
    static UNDERLINETHICKNESS: number;
    static create(paramarg0: number): TT_Postscript;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TT_Postscript;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nFormatType(paramarg0: number): number;
    static nisFixedPitch(paramarg0: number): number;
    static nitalicAngle(paramarg0: number): number;
    static nmaxMemType1(paramarg0: number): number;
    static nmaxMemType42(paramarg0: number): number;
    static nminMemType1(paramarg0: number): number;
    static nminMemType42(paramarg0: number): number;
    static nunderlinePosition(paramarg0: number): number;
    static nunderlineThickness(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FormatType(): number;
    create(arg0: number, arg1: ByteBuffer): TT_Postscript;
    isFixedPitch(): number;
    italicAngle(): number;
    maxMemType1(): number;
    maxMemType42(): number;
    minMemType1(): number;
    minMemType42(): number;
    sizeof(): number;
    underlinePosition(): number;
    underlineThickness(): number;
}