import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../../../org/lwjgl/CLongBuffer.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Var_Named_Style extends Struct<FT_Var_Named_Style> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COORDS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSID: number;
    static SIZEOF: number;
    static STRID: number;
    static create(paramarg0: number): FT_Var_Named_Style;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Var_Named_Style;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncoords(paramarg0: number, paramarg1: number): CLongBuffer;
    static npsid(paramarg0: number): number;
    static nstrid(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    coords(arg0: number): CLongBuffer;
    create(arg0: number, arg1: ByteBuffer): FT_Var_Named_Style;
    psid(): number;
    sizeof(): number;
    strid(): number;
}