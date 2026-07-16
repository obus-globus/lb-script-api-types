import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Outline_ConicToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_ConicToFuncI.d.ts'
export abstract class FT_Outline_ConicToFunc extends Callback implements FT_Outline_ConicToFuncI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Outline_ConicToFunc;
    static create(paramarg0: (param0: number, param1: number, param2: number) => number): FT_Outline_ConicToFunc;
    static createSafe(paramarg0: number): FT_Outline_ConicToFunc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number, arg2: number): number;
}