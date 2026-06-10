import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { SVG_Lib_Init_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Init_Func.d.ts'
import type { SVG_Lib_Init_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Init_FuncI.d.ts'
export class SVG_Lib_Init_Func$Container extends SVG_Lib_Init_Func {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SVG_Lib_Init_Func;
    static create(paramarg0: (param0: number) => number): SVG_Lib_Init_Func;
    static createSafe(paramarg0: number): SVG_Lib_Init_Func;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number) => number)
    // private delegate: (param0: number) => number;
    invoke(arg0: number): number;
}