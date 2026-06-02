import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Affine23 } from '../../../../org/lwjgl/util/freetype/FT_Affine23.d.ts'
import type { FT_OpaquePaint } from '../../../../org/lwjgl/util/freetype/FT_OpaquePaint.d.ts'
export class FT_PaintTransform extends Struct<FT_PaintTransform> {
    static AFFINE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PAINT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_PaintTransform;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_PaintTransform;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static naffine(paramarg0: number): FT_Affine23;
    static npaint(paramarg0: number): FT_OpaquePaint;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    affine(): FT_Affine23;
    create(arg0: number, arg1: ByteBuffer): FT_PaintTransform;
    paint(): FT_OpaquePaint;
    sizeof(): number;
}