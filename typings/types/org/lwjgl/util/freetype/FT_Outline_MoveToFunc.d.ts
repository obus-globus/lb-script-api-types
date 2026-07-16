import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Outline_MoveToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_MoveToFuncI.d.ts'
export abstract class FT_Outline_MoveToFunc extends Callback implements FT_Outline_MoveToFuncI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Outline_MoveToFunc;
    static create(paramarg0: (param0: number, param1: number) => number): FT_Outline_MoveToFunc;
    static createSafe(paramarg0: number): FT_Outline_MoveToFunc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number): number;
}