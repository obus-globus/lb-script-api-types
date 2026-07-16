import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Incremental_Metrics extends Struct<FT_Incremental_Metrics> {
    static ADVANCE: number;
    static ADVANCE_V: number;
    static ALIGNOF: number;
    static BEARING_X: number;
    static BEARING_Y: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_Incremental_Metrics;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Incremental_Metrics;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nadvance(paramarg0: number): number;
    static nadvance_v(paramarg0: number): number;
    static nbearing_x(paramarg0: number): number;
    static nbearing_y(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advance(): number;
    advance_v(): number;
    bearing_x(): number;
    bearing_y(): number;
    create(arg0: number, arg1: ByteBuffer): FT_Incremental_Metrics;
    sizeof(): number;
}