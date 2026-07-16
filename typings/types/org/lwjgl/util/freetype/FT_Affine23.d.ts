import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Affine23 extends Struct<FT_Affine23> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DX: number;
    static DY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static XX: number;
    static XY: number;
    static YX: number;
    static YY: number;
    static create(paramarg0: number): FT_Affine23;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Affine23;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndx(paramarg0: number): number;
    static ndy(paramarg0: number): number;
    static nxx(paramarg0: number): number;
    static nxy(paramarg0: number): number;
    static nyx(paramarg0: number): number;
    static nyy(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_Affine23;
    dx(): number;
    dy(): number;
    sizeof(): number;
    xx(): number;
    xy(): number;
    yx(): number;
    yy(): number;
}