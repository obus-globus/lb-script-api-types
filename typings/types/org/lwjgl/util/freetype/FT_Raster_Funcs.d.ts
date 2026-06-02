import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Raster_DoneFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_DoneFunc.d.ts'
import type { FT_Raster_DoneFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_DoneFuncI.d.ts'
import type { FT_Raster_NewFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_NewFunc.d.ts'
import type { FT_Raster_NewFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_NewFuncI.d.ts'
import type { FT_Raster_RenderFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_RenderFunc.d.ts'
import type { FT_Raster_RenderFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_RenderFuncI.d.ts'
import type { FT_Raster_ResetFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_ResetFunc.d.ts'
import type { FT_Raster_ResetFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_ResetFuncI.d.ts'
import type { FT_Raster_SetModeFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_SetModeFunc.d.ts'
import type { FT_Raster_SetModeFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_SetModeFuncI.d.ts'
export class FT_Raster_Funcs extends Struct<FT_Raster_Funcs> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GLYPH_FORMAT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RASTER_DONE: number;
    static RASTER_NEW: number;
    static RASTER_RENDER: number;
    static RASTER_RESET: number;
    static RASTER_SET_MODE: number;
    static SIZEOF: number;
    static calloc(): FT_Raster_Funcs;
    static calloc(paramarg0: MemoryStack): FT_Raster_Funcs;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Raster_Funcs;
    static create(paramarg0: number): FT_Raster_Funcs;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Raster_Funcs;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Raster_Funcs;
    static malloc(paramarg0: MemoryStack): FT_Raster_Funcs;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nglyph_format(paramarg0: number): number;
    static nglyph_format(paramarg0: number, paramarg1: number): void;
    static nraster_done(paramarg0: number): FT_Raster_DoneFunc;
    static nraster_done(paramarg0: number, paramarg1: (param0: number) => void): void;
    static nraster_new(paramarg0: number): FT_Raster_NewFunc;
    static nraster_new(paramarg0: number, paramarg1: (param0: number, param1: number) => kotlin.Int): void;
    static nraster_render(paramarg0: number): FT_Raster_RenderFunc;
    static nraster_render(paramarg0: number, paramarg1: (param0: number, param1: number) => kotlin.Int): void;
    static nraster_reset(paramarg0: number): FT_Raster_ResetFunc;
    static nraster_reset(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => void): void;
    static nraster_set_mode(paramarg0: number): FT_Raster_SetModeFunc;
    static nraster_set_mode(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => kotlin.Int): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Raster_Funcs;
    glyph_format(): number;
    glyph_format(arg0: number): FT_Raster_Funcs;
    raster_done(): FT_Raster_DoneFunc;
    raster_done(arg0: (param0: number) => void): FT_Raster_Funcs;
    raster_new(): FT_Raster_NewFunc;
    raster_new(arg0: (param0: number, param1: number) => kotlin.Int): FT_Raster_Funcs;
    raster_render(): FT_Raster_RenderFunc;
    raster_render(arg0: (param0: number, param1: number) => kotlin.Int): FT_Raster_Funcs;
    raster_reset(): FT_Raster_ResetFunc;
    raster_reset(arg0: (param0: number, param1: number, param2: number) => void): FT_Raster_Funcs;
    raster_set_mode(): FT_Raster_SetModeFunc;
    raster_set_mode(arg0: (param0: number, param1: number, param2: number) => kotlin.Int): FT_Raster_Funcs;
    set(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int, arg2: (param0: number, param1: number, param2: number) => void, arg3: (param0: number, param1: number, param2: number) => kotlin.Int, arg4: (param0: number, param1: number) => kotlin.Int, arg5: (param0: number) => void): FT_Raster_Funcs;
    set(arg0: FT_Raster_Funcs): FT_Raster_Funcs;
    sizeof(): number;
}