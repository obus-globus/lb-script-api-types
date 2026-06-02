import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Size_Metrics } from '../../../../org/lwjgl/util/freetype/FT_Size_Metrics.d.ts'
export class FT_Size_Internal extends Struct<FT_Size_Internal> {
    static ALIGNOF: number;
    static AUTOHINT_METRICS: number;
    static AUTOHINT_MODE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MODULE_DATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_Size_Internal;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Size_Internal;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nautohint_metrics(paramarg0: number): FT_Size_Metrics;
    static nautohint_mode(paramarg0: number): number;
    static nmodule_data(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    autohint_metrics(): FT_Size_Metrics;
    autohint_mode(): number;
    create(arg0: number, arg1: ByteBuffer): FT_Size_Internal;
    module_data(): number;
    sizeof(): number;
}