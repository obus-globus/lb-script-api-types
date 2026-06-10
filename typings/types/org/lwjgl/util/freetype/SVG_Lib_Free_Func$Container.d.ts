import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { SVG_Lib_Free_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Free_Func.d.ts'
import type { SVG_Lib_Free_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Free_FuncI.d.ts'
export class SVG_Lib_Free_Func$Container extends SVG_Lib_Free_Func {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SVG_Lib_Free_Func;
    static create(paramarg0: (param0: number) => void): SVG_Lib_Free_Func;
    static createSafe(paramarg0: number): SVG_Lib_Free_Func;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}