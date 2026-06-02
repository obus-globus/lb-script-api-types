import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Raster_SetModeFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_SetModeFuncI.d.ts'
export abstract class FT_Raster_SetModeFunc extends Callback implements FT_Raster_SetModeFuncI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Raster_SetModeFunc;
    static create(paramarg0: (param0: number, param1: number, param2: number) => kotlin.Int): FT_Raster_SetModeFunc;
    static createSafe(paramarg0: number): FT_Raster_SetModeFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}