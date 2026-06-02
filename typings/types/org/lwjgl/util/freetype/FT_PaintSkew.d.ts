import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_OpaquePaint } from '../../../../org/lwjgl/util/freetype/FT_OpaquePaint.d.ts'
export class FT_PaintSkew extends Struct<FT_PaintSkew> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CENTER_X: number;
    static CENTER_Y: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PAINT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X_SKEW_ANGLE: number;
    static Y_SKEW_ANGLE: number;
    static create(paramarg0: number): FT_PaintSkew;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintSkew;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncenter_x(paramarg0: number): number;
    static ncenter_y(paramarg0: number): number;
    static npaint(paramarg0: number): FT_OpaquePaint;
    static nx_skew_angle(paramarg0: number): number;
    static ny_skew_angle(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    center_x(): number;
    center_y(): number;
    create(arg0: number, arg1: ByteBuffer): FT_PaintSkew;
    paint(): FT_OpaquePaint;
    sizeof(): number;
    x_skew_angle(): number;
    y_skew_angle(): number;
}