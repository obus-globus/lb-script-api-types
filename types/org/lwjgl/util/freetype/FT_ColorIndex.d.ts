import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_ColorIndex extends Struct<FT_ColorIndex> {
    static ALIGNOF: number;
    static ALPHA: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PALETTE_INDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_ColorIndex;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ColorIndex;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nalpha(paramarg0: number): number;
    static npalette_index(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alpha(): number;
    create(arg0: number, arg1: ByteBuffer): FT_ColorIndex;
    palette_index(): number;
    sizeof(): number;
}