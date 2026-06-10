import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Raster_DoneFunc } from '../../../../org/lwjgl/util/freetype/FT_Raster_DoneFunc.d.ts'
import type { FT_Raster_DoneFuncI } from '../../../../org/lwjgl/util/freetype/FT_Raster_DoneFuncI.d.ts'
export class FT_Raster_DoneFunc$Container extends FT_Raster_DoneFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Raster_DoneFunc;
    static create(paramarg0: (param0: number) => void): FT_Raster_DoneFunc;
    static createSafe(paramarg0: number): FT_Raster_DoneFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}