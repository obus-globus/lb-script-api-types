import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { SVG_Lib_Init_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Init_FuncI.d.ts'
export abstract class SVG_Lib_Init_Func extends Callback implements SVG_Lib_Init_FuncI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SVG_Lib_Init_Func;
    static create(paramarg0: (param0: number) => kotlin.Int): SVG_Lib_Init_Func;
    static createSafe(paramarg0: number): SVG_Lib_Init_Func;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}