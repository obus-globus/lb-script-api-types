import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_OpaquePaint } from '../../../../org/lwjgl/util/freetype/FT_OpaquePaint.d.ts'
export class FT_PaintScale extends Struct<FT_PaintScale> {
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
    static SCALE_X: number;
    static SCALE_Y: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_PaintScale;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintScale;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncenter_x(paramarg0: number): number;
    static ncenter_y(paramarg0: number): number;
    static npaint(paramarg0: number): FT_OpaquePaint;
    static nscale_x(paramarg0: number): number;
    static nscale_y(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    center_x(): number;
    center_y(): number;
    create(arg0: number, arg1: ByteBuffer): FT_PaintScale;
    paint(): FT_OpaquePaint;
    scale_x(): number;
    scale_y(): number;
    sizeof(): number;
}