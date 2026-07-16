import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Size_Metrics extends Struct<FT_Size_Metrics> {
    static ALIGNOF: number;
    static ASCENDER: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCENDER: number;
    static HEIGHT: number;
    static MAX_ADVANCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X_PPEM: number;
    static X_SCALE: number;
    static Y_PPEM: number;
    static Y_SCALE: number;
    static create(paramarg0: number): FT_Size_Metrics;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Size_Metrics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nascender(paramarg0: number): number;
    static ndescender(paramarg0: number): number;
    static nheight(paramarg0: number): number;
    static nmax_advance(paramarg0: number): number;
    static nx_ppem(paramarg0: number): number;
    static nx_scale(paramarg0: number): number;
    static ny_ppem(paramarg0: number): number;
    static ny_scale(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    ascender(): number;
    create(arg0: number, arg1: ByteBuffer): FT_Size_Metrics;
    descender(): number;
    height(): number;
    max_advance(): number;
    sizeof(): number;
    x_ppem(): number;
    x_scale(): number;
    y_ppem(): number;
    y_scale(): number;
}