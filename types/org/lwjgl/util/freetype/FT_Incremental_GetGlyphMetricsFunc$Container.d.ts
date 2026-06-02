import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Incremental_GetGlyphMetricsFunc } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphMetricsFunc.d.ts'
import type { FT_Incremental_GetGlyphMetricsFuncI } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphMetricsFuncI.d.ts'
export class FT_Incremental_GetGlyphMetricsFunc$Container extends FT_Incremental_GetGlyphMetricsFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Incremental_GetGlyphMetricsFunc;
    static create(paramarg0: (param0: number, param1: number, param2: boolean, param3: number) => kotlin.Int): FT_Incremental_GetGlyphMetricsFunc;
    static createSafe(paramarg0: number): FT_Incremental_GetGlyphMetricsFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: boolean, param3: number) => kotlin.Int)
    // private delegate: (param0: number, param1: number, param2: boolean, param3: number) => kotlin.Int;
    invoke(arg0: number, arg1: number, arg2: boolean, arg3: number): number;
}