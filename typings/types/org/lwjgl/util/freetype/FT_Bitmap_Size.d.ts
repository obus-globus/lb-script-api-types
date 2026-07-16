import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Bitmap_Size extends Struct<FT_Bitmap_Size> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static X_PPEM: number;
    static Y_PPEM: number;
    static create(paramarg0: number): FT_Bitmap_Size;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Bitmap_Size;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nheight(paramarg0: number): number;
    static nsize(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static nx_ppem(paramarg0: number): number;
    static ny_ppem(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_Bitmap_Size;
    height(): number;
    size(): number;
    sizeof(): number;
    width(): number;
    x_ppem(): number;
    y_ppem(): number;
}