import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ColorStopIterator } from '../../../../org/lwjgl/util/freetype/FT_ColorStopIterator.d.ts'
export class FT_ColorLine extends Struct<FT_ColorLine> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR_STOP_ITERATOR: number;
    static EXTEND: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_ColorLine;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ColorLine;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncolor_stop_iterator(paramarg0: number): FT_ColorStopIterator;
    static nextend(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    color_stop_iterator(): FT_ColorStopIterator;
    create(arg0: number, arg1: ByteBuffer): FT_ColorLine;
    extend(): number;
    sizeof(): number;
}