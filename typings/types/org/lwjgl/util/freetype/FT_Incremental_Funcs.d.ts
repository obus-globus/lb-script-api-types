import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Incremental_FreeGlyphDataFunc } from '../../../../org/lwjgl/util/freetype/FT_Incremental_FreeGlyphDataFunc.d.ts'
import type { FT_Incremental_FreeGlyphDataFuncI } from '../../../../org/lwjgl/util/freetype/FT_Incremental_FreeGlyphDataFuncI.d.ts'
import type { FT_Incremental_GetGlyphDataFunc } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphDataFunc.d.ts'
import type { FT_Incremental_GetGlyphDataFuncI } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphDataFuncI.d.ts'
import type { FT_Incremental_GetGlyphMetricsFunc } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphMetricsFunc.d.ts'
import type { FT_Incremental_GetGlyphMetricsFuncI } from '../../../../org/lwjgl/util/freetype/FT_Incremental_GetGlyphMetricsFuncI.d.ts'
export class FT_Incremental_Funcs extends Struct<FT_Incremental_Funcs> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FREE_GLYPH_DATA: number;
    static GET_GLYPH_DATA: number;
    static GET_GLYPH_METRICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Incremental_Funcs;
    static calloc(paramarg0: MemoryStack): FT_Incremental_Funcs;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Incremental_Funcs;
    static create(paramarg0: number): FT_Incremental_Funcs;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Incremental_Funcs;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Incremental_Funcs;
    static malloc(paramarg0: MemoryStack): FT_Incremental_Funcs;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfree_glyph_data(paramarg0: number): FT_Incremental_FreeGlyphDataFunc;
    static nfree_glyph_data(paramarg0: number, paramarg1: (param0: number, param1: number) => void): void;
    static nget_glyph_data(paramarg0: number): FT_Incremental_GetGlyphDataFunc;
    static nget_glyph_data(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => number): void;
    static nget_glyph_metrics(paramarg0: number): FT_Incremental_GetGlyphMetricsFunc;
    static nget_glyph_metrics(paramarg0: number, paramarg1: (param0: number, param1: number, param2: boolean, param3: number) => number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Incremental_Funcs;
    free_glyph_data(): FT_Incremental_FreeGlyphDataFunc;
    free_glyph_data(arg0: (param0: number, param1: number) => void): FT_Incremental_Funcs;
    get_glyph_data(): FT_Incremental_GetGlyphDataFunc;
    get_glyph_data(arg0: (param0: number, param1: number, param2: number) => number): FT_Incremental_Funcs;
    get_glyph_metrics(): FT_Incremental_GetGlyphMetricsFunc;
    get_glyph_metrics(arg0: (param0: number, param1: number, param2: boolean, param3: number) => number): FT_Incremental_Funcs;
    set(arg0: FT_Incremental_Funcs): FT_Incremental_Funcs;
    set(arg0: (param0: number, param1: number, param2: number) => number, arg1: (param0: number, param1: number) => void, arg2: (param0: number, param1: number, param2: boolean, param3: number) => number): FT_Incremental_Funcs;
    sizeof(): number;
}