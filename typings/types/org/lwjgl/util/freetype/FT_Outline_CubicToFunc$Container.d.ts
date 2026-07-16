import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Outline_CubicToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_CubicToFunc.d.ts'
import type { FT_Outline_CubicToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_CubicToFuncI.d.ts'
export class FT_Outline_CubicToFunc$Container extends FT_Outline_CubicToFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Outline_CubicToFunc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => number): FT_Outline_CubicToFunc;
    static createSafe(paramarg0: number): FT_Outline_CubicToFunc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
}