import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_MM_Var extends Struct<FT_MM_Var> {
    static ALIGNOF: number;
    static AXIS: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NAMEDSTYLE: number;
    static NUM_AXIS: number;
    static NUM_DESIGNS: number;
    static NUM_NAMEDSTYLES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_MM_Var;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_MM_Var;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static naxis(paramarg0: number): (Object | null)[];
    static nnamedstyle(paramarg0: number): (Object | null)[];
    static nnum_axis(paramarg0: number): number;
    static nnum_designs(paramarg0: number): number;
    static nnum_namedstyles(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    axis(): (Object | null)[];
    create(arg0: number, arg1: ByteBuffer): FT_MM_Var;
    namedstyle(): (Object | null)[];
    num_axis(): number;
    num_designs(): number;
    num_namedstyles(): number;
    sizeof(): number;
}