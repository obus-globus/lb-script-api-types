import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_MM_Axis extends Struct<FT_MM_Axis> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXIMUM: number;
    static MINIMUM: number;
    static NAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_MM_Axis;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_MM_Axis;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nmaximum(paramarg0: number): number;
    static nminimum(paramarg0: number): number;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_MM_Axis;
    maximum(): number;
    minimum(): number;
    name(): ByteBuffer;
    nameString(): string;
    sizeof(): number;
}