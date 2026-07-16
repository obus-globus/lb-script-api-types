import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FTC_Scaler extends Struct<FTC_Scaler> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FACE_ID: number;
    static HEIGHT: number;
    static PIXEL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static X_RES: number;
    static Y_RES: number;
    static create(paramarg0: number): FTC_Scaler;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FTC_Scaler;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nface_id(paramarg0: number): number;
    static nheight(paramarg0: number): number;
    static npixel(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static nx_res(paramarg0: number): number;
    static ny_res(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FTC_Scaler;
    face_id(): number;
    height(): number;
    pixel(): number;
    sizeof(): number;
    width(): number;
    x_res(): number;
    y_res(): number;
}